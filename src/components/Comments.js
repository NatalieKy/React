import React, {Component} from 'react';
import jsonService from "./jsonService";
import Comment from './Comment.js'

class Comments extends Component {

    api = new jsonService();
    state = {comments: []}

    async componentDidMount() {
        this.setState({comments: await this.api.getAllComments()})
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        );
    }
}

export default Comments;