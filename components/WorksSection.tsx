import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Work from './Work';
import { useAppSelector, useAppDispatch } from "../redux/hooks/useSelectorAndDispatch";
import { setWorkList } from '../redux/slices/toDoSlice';
import { selectWorkList } from '../redux/slices/toDoSlice';
import { WorkType } from "../services/worksListInfo";

type PropsTypes = {
    navTo: (id: number) => void;
}

function WorksSection(props: PropsTypes): React.JSX.Element {

    const workList = useAppSelector(selectWorkList);
    const dispatch = useAppDispatch();

    const checkItem = (index: number) => {
        let worksCopy = [...workList];
        let item = { ...worksCopy[index] };
        item.check = !item.check;
        worksCopy[index] = item;
        dispatch(setWorkList(worksCopy));
    }

    const deleteItem = (index: number) => {
        let worksCopy = workList.filter((_: WorkType, i: number) => i !== index);
        dispatch(setWorkList(worksCopy));
    }

    if (workList.length > 0) {
        return (
            <View>
                <View style={styles.container}>
                    {
                        workList.map(
                            (work: WorkType, index: number) => (
                                <Work
                                    key={work.id}
                                    title={work.title}
                                    check={work.check}
                                    handleCheck={() => checkItem(index)}
                                    deleteItem={() => deleteItem(index)}
                                    navTo={() => props.navTo(work.id)} />))
                    }
                    <TouchableOpacity style={styles.button} onPress={() => dispatch(setWorkList([]))}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Clear all</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center", fontWeight: "300", fontSize: 20 }}>There are not tasks</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F1ECE6",
        width: 365,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        gap: 15
    },
    button: {
        backgroundColor: "#D98326",
        width: 80, padding: 8,
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "flex-end",
        marginTop: 10
    }
});

export default WorksSection;