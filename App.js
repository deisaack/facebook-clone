import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src';
import store from "./src/store";
import axios from "axios/index";
import { Root } from "native-base";


export default class App extends React.Component {

    render() {
        return (
                <Provider store={store}>
                    <Root>
                        <AppNavigator />
                    </Root>
                </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
