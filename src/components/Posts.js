import React, {Component} from 'react';
import jsonService from "./jsonService";
import Post from './Post'

class Posts extends Component {

    api = new jsonService();
    state = {posts: []}

    async componentDidMount() {
        this.setState({posts: await this.api.getAllPosts()})
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        );
    }
}

export default Posts;