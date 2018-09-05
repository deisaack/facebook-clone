import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, Thumbnail, View, List, ListItem, Left, Right, Button, Body, Item, Icon } from "native-base";
import {connect} from "react-redux";
import TimeAgo from 'react-native-timeago';


class Post extends Component {
    render() {
        let { caption, created, down_votes, image, is_video, tags, up_votes, video, views } = this.props.post;
        return (
            <View style={styles.body}>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: this.props.user.image }} />
                        </Left>
                        <Body>
                        <Text>De Isaac</Text>
                        <Text note numberOfLines={1}>
                            <Icon name="globe" type="FontAwesome" style={{marginRight: 7, fontSize: 22, paddingRight: 10}}/>
                            <TimeAgo time={created} />
                        </Text>
                        </Body>
                    </ListItem>
                </List>
                <Image style={{height: 300, alignSelf: 'stretch'}} source={{uri: image}}/>
                <View style={styles.summary}>
                    <Item>
                        <Left><Text> <Icon name="thumbs-o-up" type="FontAwesome" style={{marginRight: 10, color: "blue", fontSize: 16}} /> deIsaac and 48 others</Text></Left>
                        <Right><Text>3 comments</Text></Right>
                    </Item>
                </View>
                <View style={styles.action}>
                    <Item>
                        <Left><Text> <Icon name="thumbs-o-up" type="FontAwesome" style={{marginRight: 10, fontSize: 22}}/> Like</Text></Left>
                        <Body><Text> <Icon name="comment-o" type="FontAwesome" style={{marginRight: 10, fontSize: 22}}/> Comment</Text></Body>
                        <Right><Text> <Icon name="share" type="FontAwesome" style={{marginRight: 10, fontSize: 19}}/> Share</Text></Right>
                    </Item>
                </View>
                <Text style={styles.caption}>{caption}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        marginBottom: 14
    },
    action: {
        borderTopWidth: .4,
        borderTopColor: "#978e8c",
        height: 40,
        padding: 10
    },
    summary: {
        fontSize: 8,
        margin: 8,
    },
    caption: {
        margin: 6
    }
});

const mapStateToProps = state => {
    return {
        user: state.user,
        posts: state.posts.results,
    }
};
export default connect(mapStateToProps)(Post);
