import React, { Component } from 'react';
import { Container, Thumbnail, ListItem, List, Left, Body, Right, Content, Header, Item, Input, Icon, Button, Text, View } from 'native-base';
import {connect} from "react-redux";
import {StyleSheet, Image, Dimensions, ImageBackground } from "react-native";


class User extends Component {
    static navigationOptions = {
        header: null
    };

    render() {

        let { username, image, firstName, lastName } = this.props.user;
        let { posts } = this.props;
        username = username[0].toUpperCase() + username.slice(1);
        const searchText = "Search in " + username + "'s posts";
        console.log("Props are ", this.props);
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
                <Content>
                    <Image source={require("../../images/tile.jpg")} style={styles.bgImage}/>
                    <Image source={{ uri: image}} style={styles.userImage}/>
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>{firstName} {lastName}</Text>
                        <Text style={styles.username}>({username})</Text>
                        <Text style={styles.pendings}>42 Pending Posts</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 28,
        fontWeight: "bold"
    },
    username: {
        color: "#686868",
        fontSize: 21
    },
    pendings: {
        color: "#3165aa",
        fontSize: 14
    },
    userInfo: {
        alignItems: "center"
    },
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
    greenBack: {
        // backgroun
    },
    bgImage: {
        position: "absolute",
        height: 150,
        marginTop: 0,
        resizeMode: "stretch",
        flex: 1,
        width: '100%'
    },
    userImage: {
        width: 120,
        height: 120,
        // justifyContent: "center",
        marginTop: 80,
        marginLeft: (Dimensions.get('window').width/2 -60),
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 10
    }
});

const mapStateToProps = state => {
    return {
        user: state.user,
        posts: state.posts.results,
        device: state.device
    }
};

export default connect(mapStateToProps)(User);
