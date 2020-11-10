import React, {Component} from 'react';
import JsonPlaceholderService from "../../services/JsonPlaceholderService";
import User from "./User";

class Users extends Component {

    state = {users: []}

    api = new JsonPlaceholderService()

   async componentDidMount() {
        this.setState({users: await this.api.getAllUsers()})
    }

    render() {

        return (
            <div>
                <h2>All users:</h2>
                {
                    this.state.users.map(user => <User singleUser={user} key={user.id}/>)
                }
            </div>
        );
    }
}

export default Users;