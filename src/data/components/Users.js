import React from "react";

export default class Users extends React.Component {

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    state = {users : []}

    goToHome = () => {
        this.props.history.push({pathname: '/'})
    }

    render() {
        return (
            <div>
                <button onClick={this.goToHome}>Home</button>
                {
                    this.state.users.map(user => (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                            <p>{user.id}</p>
                            <button onClick={() => this.props.history.push(`/users/${user.id}`)}>Show me this user</button>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        )
    }
}