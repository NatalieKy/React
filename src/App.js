import './App.css';
import React from "react";
import Users from "./components/Users";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import {NavLink, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import User from "./components/User";
import '../src/components/styles.css'



function App() {
    return (
            <Router>
                <div className={"d-flex justify-content-center"}>
                    <NavLink className={"p-2"} to='/'>Home</NavLink>
                    <NavLink className={"p-2"} to='/users'>Users</NavLink>
                    {/*<NavLink className={"p-2"} to='/posts'>Posts</NavLink>*/}
                    {/*<NavLink className={"p-2"} to='/comments'>Comments</NavLink>*/}
                </div>
                <div>
                    <Switch>
                        {/*<Route path='/users/:id' component={User}/>*/}
                        <Route path='/users' component={Users}/>
                        {/*<Route path='/posts' component={Posts}/>*/}
                        {/*<Route path='/comments' component={Comments}/>*/}
                        <Route path='/' render={() => {return <h1 className={"text-center"}>Hello, this is homepage!</h1>}}/>
                    </Switch>
                </div>
            </Router>
    );
}
export default App;

