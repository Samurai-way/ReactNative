import React from 'react';
import {Card, Title} from "react-native-paper";
import {SearchTitleOneFilmType} from "../types/types";
import {Image, StyleSheet} from "react-native";

type FilmType = {
    film: SearchTitleOneFilmType
}

export const FilmSearched = ({film}: FilmType) => {
    return (
        <Card style={styles.card} key={film.imdbID}>
            <Card.Content style={{...styles.content}}>
                <Image style={styles.img} source={{uri: film.Poster}}/>
                <Title style={styles.title}>{film.Title}</Title>
                <Title style={styles.title}>{film.Year}</Title>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 175,
        margin: 10,
        textAlign: 'center'

    },
    img: {
        width: 190,
        height: 280,
        aspectRatio: 40 / 80,
    },
    content: {
        alignItems: 'center',

    },
    title: {
        marginTop: 10,
        textAlign: 'center'
    }
})