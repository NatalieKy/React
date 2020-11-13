import './App.css';
import React from "react";
import Users from "./components/Users";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import {NavLink, Route, Switch} from "react-router-dom";



function App() {
    return (
        <div>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/comments'>Comments</NavLink>
            </div>
            <div>
                <Switch>
                    <Route path='/users' component={Users}/>
                    <Route path='/posts' component={Posts}/>
                    <Route path='/comments' component={Comments}/>
                    <Route path='/' render={() => {return <h1>Hello!</h1>}}/>
                </Switch>
            </div>
        </div>
    );
}
export default App;

