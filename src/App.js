import './App.css';

import React from "react";
import {Route, Switch} from "react-router";
import Users from "./data/components/Users";

import {NavLink} from "react-router-dom";
import Posts from "./data/components/Posts";
import User from "./data/components/User";

function App() {
  return (
      <div>
          <div >
              <NavLink exact to='/' className={'myOwnClass'}>Home</NavLink>
              <NavLink to='/users' className={'myOwnClass'}>Users</NavLink>
              <NavLink
                  to={{pathname: '/posts', search: '?a=1&b=2', hash: 'xxx'}}
                       className={'myOwnClass'}>
                  Posts
              </NavLink>
          </div>

        <div>
            <Switch>
                <Route path='/users/:id' component={User}/>
                <Route path='/users' component={Users}/>
                <Route path='/posts' component={Posts}/>
                <Route path='/' render={() => <h1>This is main component</h1>}/>
            </Switch>
        </div>
      </div>
  );
}
export default App;

