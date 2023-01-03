import React from "react"
import { Link } from "react-router-dom"

import Classes from "./Footer.module.css"
const footer = () => (
    <footer className={Classes.Footer}>
        <Link>Coded by Abdullahi Bolutife ~ Bolu</Link>
    </footer>
)

export default footer