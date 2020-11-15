import React, {Component} from 'react';
import jsonService from "./jsonService";
import {withRouter, Link, NavLink, BrowserRouter} from "react-router-dom";


class User extends Component {

    api =  new jsonService()
    state = {user : {}}

    async componentDidMount() {
        this.setState({user: await this.api.getUserById(this.props.match.params.id)})
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.setState({user: await this.api.getUserById(this.props.match.params.id)})
        }
    }

    render() {

        let {id, name, username, email} = this.state.user

        return (
            <div>
                <p>{id}</p>
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>

            </div>

        );
    }
}

export default withRouter(User);
