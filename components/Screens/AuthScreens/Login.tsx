import React from 'react';
import {Button, Text, View} from "react-native";

export const Login = ({navigation}: any) => {
    return (
        <View>
            <Text>Login</Text>
            <Button title={'button'} onPress={() => navigation.navigate('Registration',{
                screen: 'Registration'
            })}/>
        </View>
    );
};

