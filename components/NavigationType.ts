import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

export type Home = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type Profile = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type Feed = NativeStackScreenProps<RootStackParamList, 'Feed'>;