import React, {Component} from 'react';

class User extends Component {

    state = {status: this.props.user.status}

    changer = (status) => {
        this.setState({status: !this.state.status})
    }

    render() {

        let {id, name, age, status} = this.props.user
        return (
            <div>
                {id} {name} - {age} - {this.state.status.toString()}
                <div><button onClick={() => this.changer()} >Change status</button></div>
            </div>
        );
    }
}

export default User;