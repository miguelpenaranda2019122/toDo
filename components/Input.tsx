import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import React from 'react';
import { useAppSelector, useAppDispatch } from "../redux/hooks/useSelectorAndDispatch";
import { setText, setModalVisible } from "../redux/slices/toDoSlice";
import { selectText, selectModalVisible } from '../redux/slices/toDoSlice';

function Input(): React.JSX.Element {

    const text = useAppSelector(selectText);
    const modalVisible = useAppSelector(selectModalVisible);
    const dispatch = useAppDispatch();

    const openModal = ()=> {
        if (!text.trim()) {
            Alert.alert(
             "Title field empty",
             "Please, fill the title field before creating a new work to do",
             [
                 {text: "OK"}
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
                placeholder="What do you need to do?"
                placeholderTextColor={"#C5C5C5"}
                onChangeText={(newText: string) => dispatch(setText(newText))}
                defaultValue={text}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={openModal}
            >
                <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>ADD</Text>
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
        borderBottomEndRadius: 30
    }
});

export default Input;