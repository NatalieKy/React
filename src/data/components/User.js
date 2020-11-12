import React from "react";

export default class User extends React.Component {


    state = {user : {}}

    componentDidMount() {
        const id = this.props.match.params.id
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(user => this.setState({user}))
    }

    render() {

        return (
            <div>
                {
                    this.state.user && (
                        <div>{this.state.user.name} - {this.state.user.email}</div>
                    )
                }
            </div>
        )
    }
}