import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button, Container, Content } from "native-base";
import LogoArea from "./LogoArea";
import Form from "./Form";
import {authInputChange, login} from "../../actions";
import {connect} from "react-redux";


export class Login extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
        <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: '#082e6b'}} >
                    <LogoArea/>
                </View>
                <View style={{flex: 3, backgroundColor: 'white'}}>
                    <Form/>
                    <Button bordered dark style={styles.createAcc}>
                        <Text>CREATE NEW SOCIAL ACCOUNT</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    createAcc: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        color: '#000'
    }
});

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps, { authInputChange, login })(Login);
