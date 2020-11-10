import React, {Component} from 'react';
import JsonPlaceholderService from "../../services/JsonPlaceholderService";
import Comment from "./Comment";

class Comments extends Component {

    state = {comments: []};
    api = new JsonPlaceholderService()

    async componentDidMount() {
        this.setState({comments: await this.api.getAllComments()})
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(singleComment => <Comment comment={singleComment} key={singleComment.id}/> )
                }
            </div>
        );
    }
}

export default Comments;