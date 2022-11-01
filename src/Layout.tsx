import React from "react";

import "./Layout.css";
import "./index.css";

const Layout = () => {
    return (
        <div id="grid">
            <div id="logo-container">Top Left</div>
            <div id="left-menu-container">Menu Left</div>
            <div id="top-menu-container">Menu Top</div>
            <div id="main-board-container">Main Board</div>
        </div>
    );
};

export default Layout;
