import './App.css';
import React from "react";
import Users from "../src/components/Users";
import Posts from "../src/components/Posts";
import {NavLink, Route, Switch, BrowserRouter as Router} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className={"d-flex justify-content-center"}>
                <NavLink className={"p-2"} to='/'>Home</NavLink>
                <NavLink className={"p-2"} to='/users'>Users</NavLink>
            </div>
            <div>
                <Switch>
                    <Route path='/users/:id/posts' component={Posts}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/' render={() => {return <h1 className={"text-center"}>Hello, this is homepage!</h1>}}/>
                </Switch>
            </div>
        </Router>
    );
}
export default App;
