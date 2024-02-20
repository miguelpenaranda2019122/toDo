import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from '../components/Header';
import { useAppSelector } from "../redux/hooks/useSelectorAndDispatch";
import { DetailsScreenRouteProp } from '../services/types';
import { useLayoutEffect } from "react";
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../services/types";

interface DetailsScreenProps {
    route: DetailsScreenRouteProp
    navigation: NavigationProp<RootStackParamList>;
}

function DetailsScreen({ route, navigation }: DetailsScreenProps): React.JSX.Element {
    const { idItem } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('ChangeLanguage')}>
                    <Image source={{ uri: 'https://image.similarpng.com/very-thumbnail/2020/12/Google-translate-icon-design-on-transparent-background-PNG.png' }} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const workList = useAppSelector(state => state.workList.find(work => work.id === idItem));

    return (
        <View style={{ gap: 30 }}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>{workList?.title}</Text>
                <Text>{workList?.desc}</Text>
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