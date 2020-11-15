import React, {Component} from 'react';
import jsonService from "./jsonService";
import {withRouter, Link, NavLink, BrowserRouter, Switch, Route} from "react-router-dom";


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
        let {pathname} = this.props.location
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">User id: {id}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">User name: {name}</h6>
                        <p className="card-text">
                            Username: {username}
                            Email: {email}
                        </p>
                        <NavLink to={`${pathname}/posts`} className="card-link">User {id} posts</NavLink>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(User);