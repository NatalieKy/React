import React, {Component} from 'react';
import jsonService from "./jsonService";
import {BrowserRouter as Router, Switch, Route, NavLink, withRouter} from "react-router-dom";
import User from "./User";


class Users extends Component {

    api = new jsonService();
    state = {users: []}

    async componentDidMount() {
        this.setState({users: await this.api.getAllUsers()})
    }

    render() {

        const {match: {path}} = this.props

        return (
            <div>
                <h3>Users list</h3>
                {
                    this.state.users.map(user =>
                        <div key={user.id}>
                        <NavLink to={`${path}/${user.id}`}>
                            {user.name}
                        </NavLink>
                    </div>)
                }
                <hr/>
                <Switch>
                    <Route path={`${path}/:id`} component={User}/>
                </Switch>
            </div>
        );
    }
}

export default Users;
