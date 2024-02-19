import { View } from "react-native";
import { useTranslation } from 'react-i18next';
import Card from "../components/Card";
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../services/types";

interface HomeScreenProps {
    navigation: NavigationProp<RootStackParamList>;
}


function ChangeLanguageScreen({ navigation }: HomeScreenProps): React.JSX.Element {

    const { t, i18n } = useTranslation();
    const selectedLanguageCode = i18n.resolvedLanguage;

    const languages = [
        { label: 'en', name: t('english'), flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
        { label: 'es', name: t('spanish'), flag: "🇪🇸" },
        { label: 'pt', name: t('portuguese'), flag: "🇵🇹" }
    ];

    return (
        <View style={{ padding: 30, paddingHorizontal: 18, gap: 25 }}>
            {
                languages.map(lang => (
                    <Card
                        onPress={() => {
                            i18n.changeLanguage(lang.label);
                            navigation.navigate('Home');
                        }}
                        check={lang.label === selectedLanguageCode}
                        name={lang.name}
                        lang={lang.label}
                        flag={lang.flag}
                        key={lang.label} />
                ))
            }
        </View>
    )
}

export default ChangeLanguageScreen;