import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {WithSafeAreaView} from "./components/WithSafeAreaView";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {RootAuth} from "./components/Screens/AuthScreens/RootAuth";

// const Stack = createNativeStackNavigator<RootStackParamList>();
// const Stack = createBottomTabNavigator();
const Stack = createDrawerNavigator();
function HomeScreen({navigation}: any) {
    return (
        <WithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button title={'button'} onPress={() => navigation.navigate('DetailsScreen')}/>
                <Button title={'button'} onPress={() => navigation.navigate('UserScreen')}/>
            </View>
        </WithSafeAreaView>
    );
}

function DetailsScreen({navigation}: any) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title={'button'} onPress={() => navigation.navigate('HomeScreen')}/>
            <Button title={'button'} onPress={() => navigation.navigate('UserScreen')}/>
        </View>
    );
}

function UserScreen({navigation}: any) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title={'button'} onPress={() => navigation.navigate('HomeScreen')}/>
            <Button title={'button'} onPress={() => navigation.navigate('DetailsScreen')}/>
        </View>
    );
}

export default function App() {

    // const [count, setCount] = useState(0)
    // const [checked, setChecked] = useState(false)

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="RootAuth" component={RootAuth}/>
                    <Stack.Screen name="Profile" component={DetailsScreen}/>
                    <Stack.Screen name="Feed" component={UserScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
