import React, {Component} from 'react';
import {users} from "../data";
import User from "./User";


class Users extends Component {
    render() {
        return (
            <div>
                {
                    users.map((singleUser) => {return <User user={singleUser}/>})
                }
            </div>
        );
    }
}

export default Users;