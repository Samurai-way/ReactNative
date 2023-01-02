import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";

type WithSafeAreaViewType = {
    children: JSX.Element
}

export const WithSafeAreaView = (props: WithSafeAreaViewType) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {props.children}
        </SafeAreaView>
    );
};

