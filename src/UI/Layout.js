import React from "react";

import Header from "../components/Header/Header"
// import Footer from "../components/Footer/Footer"

const Layout = (Props) => {
    return (
        <div>
            <Header />
            {Props.children}
            {/* < Footer /> */}
        </div>
    )
}

export default Layout;