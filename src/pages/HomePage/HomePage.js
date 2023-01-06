import React from "react";

import classes from "./HomePage.module.css"
import Header from "../../components/Header/Header"
import Post from "../../components/Post/Post";

const HomePage = () => {
    return (
        <div className={classes.Stories}>
            <Header />
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

export default HomePage