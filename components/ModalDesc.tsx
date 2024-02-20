import { Modal, StyleSheet, Text, Pressable, View, TextInput, Alert } from 'react-native';
import { useAppSelector, useAppDispatch } from "../redux/hooks/useSelectorAndDispatch";
import { selectWorkList, selectText, selectTextArea, selectModalVisible } from '../redux/slices/toDoSlice';
import { setWorkList, setText, setTextArea, setModalVisible } from '../redux/slices/toDoSlice';
import { WorkType } from '../services/worksListInfo';
import { useTranslation } from 'react-i18next';

function ModalDesc(): React.JSX.Element {

    const { t } = useTranslation();

    const workList = useAppSelector(selectWorkList);
    const text = useAppSelector(selectText);
    const textArea = useAppSelector(selectTextArea);
    const modalVisible = useAppSelector(selectModalVisible);

    const dispatch = useAppDispatch();

    const addItem = () => {

        if (!textArea.trim()) {
            Alert.alert(
                `${t("modalAlertTitleText")}`,
                `${t("modalAlertDescText")}`,
                [
                    { text: "OK" }
                ]
            );
            return;
        }

        const maxId = workList.reduce((max: number, work: { id: number }) => Math.max(max, work.id), 0);
        const newWork: WorkType = {
            id: maxId + 1,
            title: text,
            desc: textArea,
            check: false
        }
        dispatch(setWorkList([...workList, newWork]));
        dispatch(setText(''));
        dispatch(setTextArea(''));
        dispatch(setModalVisible(false));
    }

    return (
        <View style={styles.container}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    dispatch(setModalVisible(!modalVisible))
                }}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>{t("modalTitle")}</Text>
                        <TextInput multiline={true}
                            numberOfLines={8}
                            style={styles.textarea}
                            placeholder={t("textAreaText")}
                            placeholderTextColor={"#C5C5C5"}
                            onChangeText={(someText: string) => dispatch(setTextArea(someText))}
                            defaultValue={textArea} />
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <Pressable
                                style={{
                                    flex: 1,
                                    backgroundColor: "#D98326",
                                    padding: 8,
                                    borderRadius: 10
                                }}
                                onPress={() => dispatch(setModalVisible(!modalVisible))}>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>{t("buttonBack")}</Text>
                            </Pressable>
                            <Pressable
                                style={{
                                    flex: 1,
                                    backgroundColor: "#76B7CD",
                                    padding: 8,
                                    borderRadius: 10
                                }}
                                onPress={addItem}
                            >
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>{t("buttonCreate")}</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#F1ECE6',
        borderRadius: 20,
        padding: 24,
        gap: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#D98326",
        textTransform: "uppercase",
        textAlign: "center"
    },
    textarea: {
        height: 200,
        backgroundColor: "#ffff",
        width: 300,
        borderRadius: 10,
        paddingHorizontal: 15
    }
});


export default ModalDesc;