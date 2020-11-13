import React, {Component} from 'react';
import jsonService from "./jsonService";
import User from "./User";


class Users extends Component {

    api = new jsonService();
    state = {users: []}

   async componentDidMount() {
        this.setState({users: await this.api.getAllUsers()})
    }

    gohome = () => {
        this.props.history.push({pathname: '/'})
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.gohome}>Homepage</button>
                </div>
                {
                    this.state.users.map(user => <User key={user.id} user={user}/>)
                }

            </div>
        );
    }
}

export default Users;