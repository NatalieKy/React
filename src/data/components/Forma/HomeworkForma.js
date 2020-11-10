import React, {Component} from 'react';
import JsonPlaceholderService from "../../services/JsonPlaceholderService";
import User from "../User/User";
import './forma.css'

class HomeworkForma extends Component {

    api = new JsonPlaceholderService()
    state = {jsonusers: [], inputValue: '', finalUsers : []}



    async componentDidMount() {
        this.setState({jsonusers: await this.api.getAllUsers()})
    }

    render() {

        return (
            <div>
                <form className={"myClass1"}>
                    <h3>Representation of jsonplaceholder fake api users.</h3>
                    <input value={this.state.inputValue} onChange={this.onInputChange} placeholder="type id or name"/>
                </form>
                {
                    (this.state.finalUsers.length !==0 && this.state.inputValue !== ' ') && (
                    this.state.finalUsers.map(user => <User user={user} key={user.id}/>)
                    )
                }
                {
                    (this.state.finalUsers.length === 0 && this.state.inputValue.length !== 0) && (
                        <h3 className="myClass2">Are You sure? There`s no such user</h3>
                    )
                }
            </div>
        );
    }

    onInputChange = (event) => {
       let filtered = this.state.jsonusers.filter(user =>
           ((user.name.toLowerCase().includes(event.target.value) || user.id.toString().includes(event.target.value))
               && event.target.value.length !== 0))
        this.setState({finalUsers: filtered, inputValue: event.target.value})
    }
}


export default HomeworkForma;

