import React, {Component} from 'react';
import JsonPlaceholderService from "../../services/JsonPlaceholderService";
import Post from "./Post";

class Posts extends Component {

    state = {posts: []};

    api = new JsonPlaceholderService();

    async componentDidMount() {
        this.setState({posts: await this.api.getAllPosts()})
    }

    render() {
        return (
            <div>
                <h3>All posts: </h3>
                {
                    this.state.posts.map(singlePost => <Post post={singlePost} key={singlePost.id}/>)
                }
            </div>
        );
    }
}

export default Posts;