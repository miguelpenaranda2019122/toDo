import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

type PropsType = {
    handleCheck: () => void;
    navTo: () => void;
    deleteItem: () => void;
    check: boolean;
    title: string;
}

function Work(props: PropsType): React.JSX.Element {

    return (
        <View style={styles.work}>
            <TouchableOpacity onPress={props.handleCheck} style={styles.check}>
                <Text style={{ fontSize: 20, color: `${props.check ? "green" : "black"}` }}>
                    {props.check ? "✓" : ""}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.text} onPress={props.navTo}>
                <Text style={props.check ? { textDecorationLine: "line-through", color: "#C5C5C5" } : { textDecorationLine: "none" }}>{props.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.deleteItem}>
                <Image source={{ uri: 'https://static-00.iconduck.com/assets.00/trash-icon-462x512-njvey5nf.png' }} style={{ width: 12, height: 16 }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    work: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        borderBottomColor: "#76B7CD",
        borderBottomWidth: 1,
        height: 30,
        width: 220,
        paddingTop: 6
    },
    check: {
        width: 25,
        height: 25,
        borderRadius: 50,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Work;