import { useLayoutEffect } from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import Header from '../components/Header';
import Input from "../components/Input";
import WorksSection from "../components/WorksSection";
import ModalDesc from "../components/ModalDesc";
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../services/types";

interface HomeScreenProps {
    navigation: NavigationProp<RootStackParamList>;
}

function HomeScreen({ navigation }: HomeScreenProps): React.JSX.Element {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('ChangeLanguage')}>
                    <Image source={{ uri: 'https://image.similarpng.com/very-thumbnail/2020/12/Google-translate-icon-design-on-transparent-background-PNG.png' }} style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <ScrollView>
            <View style={{ gap: 30 }}>
                <Header />
                <Input />
                <WorksSection
                    navTo={(id: number) => navigation.navigate('Details', {
                        idItem: id
                    })}
                />
                <ModalDesc />
            </View>
        </ScrollView>
    )
}

export default HomeScreen;