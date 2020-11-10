import React, {Component} from 'react';

class Post extends Component {

    state = {isClicked: false}


    render() {

        let {id, title, body} = this.props.post

        return (
            <div>
                <h3>{id} - {title}</h3>
                <div><button className='btn btn-info' onClick={() => this.showBody(this.isClicked)}>Show post</button></div>
                {
                    this.isClicked && (
                        <div>
                            <div>{body}</div>
                            <div><button>Show comments</button></div>
                        </div>
                    )
                }
            </div>
        );
    }

    showBody = (isClicked) => {
        this.isClicked = !this.isClicked
        this.setState({isClicked: !this.isClicked})
    }
}

export default Post;