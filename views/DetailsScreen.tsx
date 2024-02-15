import { View, Text, StyleSheet, Button } from "react-native";
import Header from '../components/Header';
import { useSelector } from "react-redux";

function DetailsScreen({route}: any): React.JSX.Element{
    const { idItem } = route.params;

    let { workList } = useSelector((state: any) => state.toDoReducer);

    const item = workList.filter((work:any) => work.id === idItem)[0];

    return (
        <View style={{gap: 30}}>
            <Header/>
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