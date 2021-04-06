/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {
    Icon,
} from 'react-native-elements';

const CardDetail = ({ cardText, onPress }) => {

    return (
        <View style={styles.container}>
            <View style={styles.iconText}>
                <View style={styles.icon}>
                    <Icon
                        name="inbox"
                        type="material"
                        color="#0000cd"
                    />
                </View>
                <Text style={styles.cardText}>{cardText}</Text>
            </View>
            <TouchableOpacity style={styles.touchIcon} onPress={onPress} >
                <Icon
                    name="menu"
                    type="material"
                    color="#0000cd"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    icon: {
        backgroundColor: '#87cefa',
        padding: 10,
        borderRadius: 2,
    },
    touchIcon: {
        backgroundColor: '#87cefa',
        borderRadius: 50,
        padding: 10,
    },
    iconText: {
        flexDirection: 'row',
    },
    cardText: {
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'Avenir.Next',
        marginTop: 15,
    },
});

export default CardDetail;
