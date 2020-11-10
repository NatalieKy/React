import React, {Component} from 'react';

class NotControlledForma extends Component {

    // WHY NOT CONTROLLED - we see value only after event

    // constructor(props) {
    //     super(props);                        FIRST WAY (NOT PRIORITY)
    //     this._name = React.createRef()
    // }

    clicker = () => {
        // console.log(this._name.current.value)   NOT PRIORITED WAY TO USE REFS
        const name = this._name.value
        console.log(name);
    };
    render() {
        return (
            <div>
                {/*<input type="text" ref={this._name}/>  NOT PRIORITED WAY TO USE REFS*/}
                {<input type="text" ref={input => this._name = input}/>}
                <button onClick={this.clicker}>Click me</button>
            </div>
        );
    }
}


export default NotControlledForma;