import React from 'react';
import {Button, Text, View} from "react-native";

export const Registration = ({navigation}: any) => {
    return (
        <View>
             <Text>Registration</Text>
            <Button title={'button'} onPress={() => navigation.navigate('RootAuth')}/>
        </View>
    );
};

