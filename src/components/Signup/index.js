import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {View, Text, Button, Container, Content, Toast} from "native-base";
import LogoArea from "../Login/LogoArea";
import Form from "./Form";
import { loginInputChange, login} from "../../actions";
import {connect} from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';


export class Signup extends Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        console.log("Did mount ", this.props);
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
                        transparent style={styles.login}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text>Already have an account ? Login</Text>
                    </Button>
                </View>
                <Spinner visible={this.props.user.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    login: {
        alignSelf: 'center',
        color: '#0a0a46',
        marginTop: 40
    }
});

const mapStateToProps = state => {
    return {
        user: state.user,
        posts: state.posts,
    }
};

export default connect(mapStateToProps, { loginInputChange, login })(Signup);
