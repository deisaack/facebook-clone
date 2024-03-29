import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {View, Text, Button, Container, Content, Toast} from "native-base";
import LogoArea from "./LogoArea";
import Form from "./Form";
import { loginInputChange, login} from "../../actions";
import {connect} from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';


export class Login extends Component {
    static navigationOptions = {
        header: null
    };

    componentDidUpdate() {
        if (this.props.user.loggedIn) {
            this.props.navigation.navigate('App');
        }
    }

    render() {
        return (
        <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: '#082e6b'}} >
                    <LogoArea/>
                </View>
                <View style={{flex: 3, backgroundColor: 'white'}}>
                    <Form/>
                    <Button
                        bordered dark style={styles.createAcc}
                        onPress={() => this.props.navigation.navigate('Signup')}
                    >
                        <Text>CREATE NEW SOCIAL ACCOUNT</Text>
                    </Button>
                </View>
                <Spinner visible={this.props.user.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    createAcc: {
        alignSelf: 'center',
        color: '#000',
        marginTop: 40
    }
});

const mapStateToProps = state => {
    return {
        user: state.user,
        posts: state.posts,
    }
};

export default connect(mapStateToProps, { loginInputChange, login })(Login);
