import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';

function Header(): React.JSX.Element {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {t('headerTitle')}
            </Text>
        </View>
    )
}

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

export default Header;