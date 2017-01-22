import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import FriendsDetail from './FriendsDetail';

class FriendsList extends Component {
    state = { friends: [] };

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(data => {
            return data.json();
        })
        .then(data => {
            this.setState({ friends: data });
        })
    }

    renderFriends() {
        return this.state.friends.map(friend => 
            <FriendsDetail key={friend.title} friend={friend} />
        );
    }

    render() {
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderFriends()}
            </ScrollView>
        );
    }
}

export default FriendsList;
