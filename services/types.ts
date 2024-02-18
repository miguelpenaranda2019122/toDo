import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Details: { idItem: number };
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>

