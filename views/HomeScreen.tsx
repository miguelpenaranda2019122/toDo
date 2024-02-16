import { View, ScrollView } from "react-native";
import Header from '../components/Header';
import Input from "../components/Input";
import WorksSection from "../components/WorksSection";
import ModalDesc from "../components/ModalDesc";
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../services/types";

interface HomeScreenProps {
    navigation: NavigationProp<RootStackParamList>;
  }

function HomeScreen({ navigation }: HomeScreenProps ): React.JSX.Element {
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