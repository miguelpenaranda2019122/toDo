import { View, Text, StyleSheet } from "react-native";
import Header from '../components/Header';
import { useAppSelector } from "../redux/hooks/useSelectorAndDispatch";
import { selectWorkList } from '../redux/slices/toDoSlice';
import { WorkType } from "../services/worksListInfo";
import { DetailsScreenRouteProp } from '../services/types';

type PropsTypes = {
    route: DetailsScreenRouteProp
}

function DetailsScreen({ route }: PropsTypes): React.JSX.Element {
    const { idItem } = route.params;

    const workList = useAppSelector(selectWorkList);

    const item = workList.filter((work: WorkType) => work.id === idItem)[0];

    return (
        <View style={{ gap: 30 }}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F1ECE6",
        width: 310,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        gap: 15
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "700"
    }
});

export default DetailsScreen;