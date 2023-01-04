import React from "react";
import { Link } from "react-router-dom"
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Classes from './Form.module.css'

const form = () => {
    // const wrapperClassName = `${Classes.editor} ${Classes.wrapper}`;
    return (
        <div className={Classes.Form}>
            <h4>New Post</h4>
            <section>
                {/* <form> */}
                <div>
                    <label for="tittle">Title</label>
                    <input type='text' id="tittle" placeholder="Tittle" title="title" required />
                </div>
                <div>
                    <label for="article" >Article</label>
                    {/* <textarea id="article" title="article" placeholder="Your Article goes here" required /> */}
                    <Editor
                        wrapperClassName={Classes.wrapper}
                        editorClassName={Classes.editor}
                        toolbarClassName={Classes.toolbar} />

                </div>
                {/* <button type="submit" href="/">Publish</button> */}
                <div><Link to="/">Publish</Link></div>
                {/* </form> */}
            </section>
        </div>
    )
}

export default form