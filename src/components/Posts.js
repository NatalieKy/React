import React, {Component} from 'react';
import jsonService from "../components/jsonService";
import Post from '../components/Post'

class Posts extends Component {

    api = new jsonService();
    state = {posts: []}

    async componentDidMount() {
        this.setState({posts: await this.api.getAllPostsOfUser(this.props.match.params.id)})
    }

    render() {

        return (
            <div>
                <h3>User {this.props.match.params.id} posts</h3>
                {
                    this.state.posts.map(post =>
                        <Post key={post.id} post={post}/>)
                }
            </div>
        );
    }
}

export default Posts;