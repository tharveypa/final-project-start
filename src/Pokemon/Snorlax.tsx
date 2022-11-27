import React from "react";
import useDragger from "../hooks/useDragger";

const Snorlax: React.FC = () => {
    useDragger("Snorlax");

    return (
        <div id="Snorlax" className="Snorlax">
            <img src={require("./143.png")} width="200" height="200" />
        </div>
    );
};

export default Snorlax;
