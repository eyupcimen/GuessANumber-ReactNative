import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/resim.jpg')}
                    //source={{ uri: 'https://media.istockphoto.com/photos/rocky-mountain-peak-picture-id904856396?k=6&m=904856396&s=612x612&w=0&h=ZVZpbtWCmkHLN6cGpRtGdBIhwZZsMwXn5xSL3ThqslU=' }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText} >You phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds a guess <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    highlight: {
        color: Colors.primary
    }
});

export default GameOverScreen;