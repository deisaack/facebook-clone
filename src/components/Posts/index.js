import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Container, Content, Header } from "native-base";
import {connect} from "react-redux";


export class Posts extends Component {
    render() {
        return (
            <Container>
                <Header>

                </Header>
                <Content>
                    <Text>Hello posts</Text>
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

export default connect(mapStateToProps)(Posts);
