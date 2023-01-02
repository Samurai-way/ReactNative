import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import {store} from "./components/store/store";
import {useAppSelector} from "./components/store/redux-utils";
import {ActivityIndicator, MD2Colors} from "react-native-paper";
import {Data} from "./components/UI/Data";
import {SearchContent} from "./components/UI/SearchContent";


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

const styles = StyleSheet.create({
    global: {
        width: '100%',
        height: '100%'
    },
    loader: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },
})

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

    const isLoading = useAppSelector(state => state.first.isLoading)
    const data = useAppSelector(state => state.first.data)
    console.log(data)
    if(isLoading){
        return <ActivityIndicator style={styles.loader} animating={true} size={'large'} color={MD2Colors.blue500}/>
    }

    return(
        <View style={styles.global}>
            <SearchContent/>
            <Data/>
        </View>


    )
}

// const styles = StyleSheet.create({
//
// })

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
