import React, {Component} from 'react';

class ControlledForma extends Component {

    state = {name: ''}

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} style={{marginTop : "5px"}}>
                    <input type="text" onChange={this.onInputChange}/>
                    <button>Click me too</button>
                </form>
            </div>
        );
    }

    onFormSubmit = (event) => {
        event.preventDefault()
    }

    onInputChange = (event) => {
        this.setState({name : event.target.value})
        console.log(event.target.value);
    }
}

export default ControlledForma;