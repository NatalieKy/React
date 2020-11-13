import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {id, title, body} = this.props.post
        return (
            <div>
                <p>post id: {id}</p>
                <p>title: {title}</p>
                <p>{body}</p>
            </div>
        );
    }
}

export default Post;