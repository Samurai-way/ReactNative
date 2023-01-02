import React, {useState} from 'react';
import {View} from "react-native";
import {useAppDispatch, useAppSelector} from "../store/redux-utils";
import {getOMD} from "../actions/getAction";
import {Button, TextInput} from "react-native-paper";

export const SearchContent = () => {

    const [text, setText] = useState('')

    const page = useAppSelector(state => state.first.page)
    const dispatch = useAppDispatch()


    const onClickButtonHandler = () => {
        dispatch(getOMD({title: text, page}))
    }

    return (
        <View>
            <View>
                <TextInput label={'Search films'} value={text} onChangeText={e => setText(e)}/>
                <Button mode={'contained'} onPress={onClickButtonHandler}>
                    search
                </Button>
            </View>
        </View>
    );
};

