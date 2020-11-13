import React, {Component} from 'react';

class Comment extends Component {

    render() {
        let {id, name, body} = this.props.comment
        return (
            <div>
               <p>comment id: {id}</p>
                <p>comment title: {name}</p>
                <p>{body}</p>

            </div>
        );
    }
}

export default Comment;