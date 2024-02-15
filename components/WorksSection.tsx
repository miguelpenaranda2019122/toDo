import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Work from './Work';
import { useSelector, useDispatch } from "react-redux";
import { setWorkList} from '../redux/actions';

function WorksSection(props: any): React.JSX.Element{

    const { workList } = useSelector((state: any) => state.toDoReducer);
    const dispatch: any = useDispatch();

    const checkItem = (index: number) => {
        let worksCopy = workList.slice();
        let item = worksCopy[index];
        item.check = !item.check;
        dispatch(setWorkList(worksCopy));
    }

    const deleteItem = (index: any) => {
        let worksCopy = workList.filter(( _ : any, i : any) => i !== index);
        dispatch(setWorkList(worksCopy));
    }
    
    if (workList.length > 0) {
        return (
            <View>
                 <View style={styles.container}>
                    {
                        workList.map(
                            (work:any, index:any) => (
                            <Work key={work.id} 
                                title={work.title} 
                                check={work.check} 
                                handleCheck={()=> checkItem(index)}
                                deleteItem={()=> deleteItem(index)}
                                navTo={()=> props.navTo(work.id)} />))
                    }
                    <TouchableOpacity style={styles.button} onPress={() => dispatch(setWorkList([]))}>
                            <Text style={{color: "white", fontWeight: "bold"}}>Clear all</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: "center", fontWeight: "300", fontSize: 20}}>There are not tasks</Text>
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
    button : {
        backgroundColor: "#D98326", 
        width: 80, padding: 8, 
        alignItems: "center",
        borderRadius: 10, 
        alignSelf: "flex-end", 
        marginTop: 10
    }
 });

export default WorksSection;