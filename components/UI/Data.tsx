import React from 'react';
import {FlatList, View} from "react-native";
import {useAppSelector} from "../store/redux-utils";
import {FilmSearched} from "./FilmSearched";

export const Data = () => {

    const data = useAppSelector(state => state.first.data)

    return (
        <View>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({item}) => <FilmSearched film={item}/>}
                keyExtractor={key => key.imdbID}
                onEndReachedThreshold={0}
                onEndReached={()=>{}}
            />
        </View>
    );
};

