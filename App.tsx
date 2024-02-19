import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import HomeScreen from './views/HomeScreen';
import DetailsScreen from './views/DetailsScreen';
import ChangeLanguageScreen from './views/ChangeLanguageScreen';
import { RootStackParamList } from './services/types';
import './i18n/i18n';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const { t } = useTranslation();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{title: `${t("headerTitleNav")}` }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{title: `${t("detailsScreen")}`}} />
          <Stack.Screen name="ChangeLanguage" component={ChangeLanguageScreen} options={{title: `${t("configurationLanguageScreen")}`}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;