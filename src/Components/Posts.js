import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../postActions';

class Posts extends Component {
    
     componentWillMount () {
    this.props.fetchPosts();
    }

    render() {
        //map through posts with an i
        const postOvi = this.props.posts.map(i => (
            <div key={i.id} > 
                <h5>{i.title}</h5>
                <p> {i.body} </p>
            </div>
        ));
        return (
            <div>
                <h1>posts</h1>
                {/* display'em */}
                {postOvi}
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    posts: state.posts.items
});

export default connect (mapStatetoProps, {fetchPosts}) (Posts);
