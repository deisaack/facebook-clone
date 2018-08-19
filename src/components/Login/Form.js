import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Item, Icon, Input, Text } from "native-base";
import { Button } from 'react-native-elements'
import {authInputChange, login} from "../../actions";
import {connect} from "react-redux";


export class Form extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
    }
    render() {
        console.log("RRR", this.props);
        return (
            <View style={styles.main} >
                <Item style={styles.inputs}>
                    <Icon active name='mail' color='blue' />
                    <Input
                        onChangeText={(password) => this.setState({password})}
                        placeholder='Username or Email'/>
                </Item>
                <Item style={styles.inputs}>
                    <Icon active name='lock' color='blue' />
                    <Input
                        onChangeText={(username) => this.setState({username})}
                        secureTextEntry={true} placeholder='Password'/>
                </Item>
                {/*<Button primary block style={[styles.inputs, styles.submitBtn]}><Text>LOG IN </Text></Button>*/}
                <Button
                    buttonStyle={{marginTop: 20}}
                    backgroundColor='#082e6b'
                    icon={{name: 'send'}}
                    title='LOG IN' />
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

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps, { authInputChange, login })(Form);
