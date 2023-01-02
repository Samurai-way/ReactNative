import React from 'react';
import {Card, Title} from "react-native-paper";
import {SearchTitleOneFilmType} from "../types/types";
import {Image} from "react-native";

type FilmType = {
    film: SearchTitleOneFilmType
}

export const FilmSearched = ({film}: FilmType) => {
    return (
        <Card>
            <Card.Content>
                <Image source={{uri: film.Poster}}/>
                <Title>{film.Title}</Title>
                <Title>{film.Year}</Title>
            </Card.Content>
        </Card>
    );
};

