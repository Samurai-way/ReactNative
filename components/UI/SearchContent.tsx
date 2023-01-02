import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import {useAppDispatch, useAppSelector} from "../store/redux-utils";
import {getOMD} from "../actions/getAction";
import {Button, TextInput} from "react-native-paper";
import {red} from "react-native-reanimated/lib/types";

export const SearchContent = () => {

    const [text, setText] = useState('')

    const page = useAppSelector(state => state.first.page)
    const dispatch = useAppDispatch()


    const onClickButtonHandler = () => {
        dispatch(getOMD({title: text, page}))
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput label={'Search films'} value={text} onChangeText={e => setText(e)}/>
                <Button style={styles.buttonSend} mode={'contained'} onPress={onClickButtonHandler}>
                    search film
                </Button>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    searchContainer: {
        marginTop: 100,
        display: 'flex',
        justifyContent: 'center',
        width: '40%'
    },
    buttonSend: {
        width: '100%',
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: 'red'
    },

});