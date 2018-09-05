import React, { Component } from 'react';
import { Container, Thumbnail, ListItem, List, Left, Body, Right, Content, Header, Item, Input, Icon, Button, Text, View } from 'native-base';
import {connect} from "react-redux";
import {StyleSheet, Image } from "react-native";
import Post from "../Post";


class Posts extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        let { posts } = this.props;
        const searchText = "Search";
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="search" />
                        <Input placeholder={searchText} />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content style={styles.container}>
                    <List dataArray={posts}
                          renderRow={(post) =>
                              <Post post={post}/>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    followers: {
        backgroundColor: "#fff",
        borderBottomColor: "#fff",
        paddingLeft: 20,
        paddingTop: 10,
        fontWeight: "bold"
    },
    followerText: {
        fontSize: 18,
        paddingStart: 25,
        paddingBottom: 25,
    },
    container: {
        backgroundColor: '#d0d0d0'
    }
});


const mapStateToProps = state => {
    return {
        user: state.user,
        posts: state.posts.results,
    }
};

export default connect(mapStateToProps)(Posts);
