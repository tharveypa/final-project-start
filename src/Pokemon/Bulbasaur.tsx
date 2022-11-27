import React from "react";
import useDragger from "../hooks/useDragger";

const Bulbasaur: React.FC = () => {
    useDragger("Bulbasaur");

    return (
        <div id="Bulbasaur" className="Bulbasaur">
            <img src={require("./001.png")} width="100" height="100" />
        </div>
    );
};

export default Bulbasaur;
