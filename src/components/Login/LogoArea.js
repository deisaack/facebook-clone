import React, { Component } from 'react';
import { Text, View } from "native-base";
import { Image, StyleSheet } from "react-native";

export default class LogoArea extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                <Image source={require("../../images/rr.jpg")}
                       style={{width: 50, height: 50, backgroundColor: '#fff'}} />
                <Text style={[styles.title]}>Riftech Social</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    }
});