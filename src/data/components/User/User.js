import React, {Component} from 'react';
import "./user.css"

class User extends Component {
    render() {

        let {id, name, username, email} = this.props.user

        return (
            <div className="card margin-top-10">
                <div className="card-header">
                   Name: {name}
                </div>
                <div className="card-body">
                    <h4 className="card-title">User id: {id}</h4>
                    <p className="card-text">Username: {username}</p>
                    <p className="card-text">Email: {email}</p>
                </div>
            </div>
        );
    }
}

export default User;



