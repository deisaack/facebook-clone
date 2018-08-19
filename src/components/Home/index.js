import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button, Container, Content, Header } from "native-base";
import {connect} from "react-redux";


export class Home extends Component {
    render() {
        return (
            <Container>
                <Header>

                </Header>
                <Content>
                    <Text>Hello</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps)(Home);
