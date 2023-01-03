import React from "react";
import { Link } from "react-router-dom"

import Classes from './Form.module.css'

const form = () => (
    <div className={Classes.Form}>
        <h4>New Post</h4>
        <section>
            <div>
                <label for="tittle">Title</label>
                <input type='text' id="tittle" placeholder="Tittle" title="title" />
            </div>
            <div>
                <label for="article" >Article</label>
                <textarea id="article" title="article" placeholder="Your Article goes here" />
            </div>
            <Link to="/">Publish</Link>
        </section>
    </div>
)

export default form