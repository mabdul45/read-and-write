import React from "react";
import { Link } from "react-router-dom";

import classes from "./Post.module.css"

const post = () => {
    return (
        <div className={classes.Post}>
            <Link to="/review">
                <h4>Where does it come from</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                </p>
                <span>17 Aug, 2021</span>
            </Link>
        </div>
    )
}

export default post