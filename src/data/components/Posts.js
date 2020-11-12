import React from "react";
import {withRouter} from "react-router";

export const Posts = (props) => {
    return (
        <div>
            <button onClick={() => {props.history.push({pathname: '/'})}}>Home</button>
            <div>
                Posts
            </div>
        </div>
    )
}

export default withRouter(Posts)