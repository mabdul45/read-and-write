import React from "react";

import classes from "./Stories.module.css"
import Post from "../../../components/Post/Post";

const stories = () => {
    return (
        <div className={classes.Stories}>
            <h1>
                Top Stories
            </h1>
            <section>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </section>
        </div>
    )
}

export default stories