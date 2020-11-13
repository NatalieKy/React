import React, {Component} from 'react';

class User extends Component {
    render() {
        let {id, name, username, email} = this.props.user
        return (
            <div>
                <p>user id: {id}, username: {name}, nick: {username}</p>
                <p>email of user: {email}</p>
            </div>
        );
    }
}

export default User;