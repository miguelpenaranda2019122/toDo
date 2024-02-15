import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F1ECE6",
        height: 80,
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        color: "#D98326"
    }
});

function Header(): React.JSX.Element{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                TO DO
            </Text>
        </View>
    )
}

export default Header;