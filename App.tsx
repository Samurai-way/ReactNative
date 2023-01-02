import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import {store} from "./components/store/store";
import {useAppDispatch, useAppSelector} from "./components/store/redux-utils";
import {createSlice} from "@reduxjs/toolkit";
import {testSlice} from "./components/reducers/test/testSlice";

// const Stack = createNativeStackNavigator<RootStackParamList>();
// const Stack = createBottomTabNavigator();
// const Stack = createDrawerNavigator();
// function HomeScreen({navigation}: any) {
//     return (
//         <WithSafeAreaView>
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//                 <Text>Home Screen</Text>
//                 <Button title={'button'} onPress={() => navigation.navigate('DetailsScreen')}/>
//                 <Button title={'button'} onPress={() => navigation.navigate('UserScreen')}/>
//             </View>
//         </WithSafeAreaView>
//     );
// }
//
// function DetailsScreen({navigation}: any) {
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Details Screen</Text>
//             <Button title={'button'} onPress={() => navigation.navigate('HomeScreen')}/>
//             <Button title={'button'} onPress={() => navigation.navigate('UserScreen')}/>
//         </View>
//     );
// }
//
// function UserScreen({navigation}: any) {
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Details Screen</Text>
//             <Button title={'button'} onPress={() => navigation.navigate('HomeScreen')}/>
//             <Button title={'button'} onPress={() => navigation.navigate('DetailsScreen')}/>
//         </View>
//     );
// }

export default function App() {
    return (
        <Provider store={store}>
        <SafeAreaProvider>
            <NavigationContainer>
                <Test/>
                {/*<Stack.Navigator>*/}
                {/*    <Stack.Screen name="RootAuth" component={RootAuth}/>*/}
                {/*    <Stack.Screen name="Profile" component={DetailsScreen}/>*/}
                {/*    <Stack.Screen name="Feed" component={UserScreen}/>*/}
                {/*</Stack.Navigator>*/}
            </NavigationContainer>
        </SafeAreaProvider>
        </Provider>
    );
}

export const Test = () => {
    const count = useAppSelector(state => state.test.count)
    const dispatch = useAppDispatch()
    const inc = testSlice.actions.inc

    const onClickButton = () => {
        dispatch(inc(count +1 ))
    }

    return(
        <View>
            <Text>
                {count}
            </Text>
            <View>
                <Button onPress={onClickButton} title={'increment'}/>
            </View>
        </View>

    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
