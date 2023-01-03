import React from 'react';

import Classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const header = () => (
    <header className={Classes.Header}>
        <div>
            <p>Read & Write</p>
            <NavLink to="/form">Be a Contributor</NavLink >
        </div>
    </header>
)

export default header
