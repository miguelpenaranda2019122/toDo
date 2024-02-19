import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type PropsType = {
    check: boolean,
    flag: string,
    lang: string,
    name: string,
    onPress: () => void
}

function Card(props: PropsType): React.JSX.Element {

    return (
        <View >
            <TouchableOpacity style={[styles.card, props.check && {backgroundColor: "#cccccc"}]} onPress={props.onPress}>
                <Text style={[styles.text, props.check && {fontWeight: "bold"}]}>{props.flag} {props.lang.toLocaleUpperCase()} - {props.name} {props.check ? "✓" : ""}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffff",
        borderRadius: 20,
    },
    text: {
        textAlign: "center",
        fontSize: 30,
        padding: 22,
        fontWeight: "500"
    }
});

export default Card;