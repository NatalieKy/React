import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {id, name, email, body} = this.props.comment
        return (
            <div>
                {body}
            </div>
        );
    }
}

export default Comment;