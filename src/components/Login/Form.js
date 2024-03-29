import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Item, Icon, Input, Text } from "native-base";
import { Button } from 'react-native-elements'
import {loginInputChange, login} from "../../actions";
import {connect} from "react-redux";
import _ from "lodash";


export class Form extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
    }
    render() {
        let formInvalid = this.props.user.error !== null;
        return (
            <View style={styles.main} >
                <Item style={styles.inputs} error={formInvalid}>
                    <Icon active name='mail' color='blue' />
                    <Input
                        onChangeText={text => this.props.loginInputChange({'field': 'username', 'value': text})}
                        placeholder='Username or Email'/>
                </Item>
                <Item style={styles.inputs} error={formInvalid}>
                    <Icon active name='lock' color='blue' />
                    <Input
                        onChangeText={text => this.props.loginInputChange({'field': 'password', 'value': text})}
                        secureTextEntry={true} placeholder='Password'/>
                </Item>
                <Button
                    buttonStyle={{marginTop: 20}}
                    backgroundColor='#082e6b'
                    icon={{name: 'send'}}
                    title='LOG IN'
                    onPress={this.props.login}
                />
                <Text style={[styles.forgot, styles.inputs]}>Forgot Password?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
        padding: 30
    },
    inputs: {
        marginTop: 20
    },
    submitBtn: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    forgot: {
        color: '#080808',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 30,
        fontWeight: '400',
    }
});

function mapStateToProps(state) {
    return { state, user: state.user, posts: state.posts };
}

export default connect(mapStateToProps, { loginInputChange, login })(Form);
