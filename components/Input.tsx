import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import React from 'react';
import { useAppSelector, useAppDispatch } from "../redux/hooks/useSelectorAndDispatch";
import { setText, setModalVisible } from "../redux/slices/toDoSlice";
import { selectText, selectModalVisible } from '../redux/slices/toDoSlice';
import { useTranslation } from 'react-i18next';

function Input(): React.JSX.Element {

    const { t } = useTranslation();

    const text = useAppSelector(selectText);
    const modalVisible = useAppSelector(selectModalVisible);
    const dispatch = useAppDispatch();

    const openModal = () => {
        if (!text.trim()) {
            Alert.alert(
                `${t("inputAlertTitleText")}`,
                `${t("inputAlertDescText")}`,
                [
                    { text: "OK" }
                ]
            );
            return;
        }
        dispatch(setModalVisible(!modalVisible))
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={t("inputText")}
                placeholderTextColor={"#C5C5C5"}
                onChangeText={(newText: string) => dispatch(setText(newText))}
                defaultValue={text}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={openModal}
            >
                <Text style={{ fontWeight: "bold", color: "white", fontSize: 40 }}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        backgroundColor: "#F1ECE6",
        width: 300,
        borderTopLeftRadius: 30,
        borderBottomStartRadius: 30,
        paddingStart: 20
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        height: 60,
        width: 65,
        backgroundColor: "#76B7CD",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 30,
        borderBottomEndRadius: 30,
        paddingRight: 3
    }
});

export default Input;