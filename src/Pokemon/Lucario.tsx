import React from "react";
import useDragger from "../hooks/useDragger";

const Lucario: React.FC = () => {
    useDragger("Lucario");

    return (
        <div id="Lucario" className="Lucario">
            <img src={require("./448.png")} width="200" height="200" />
        </div>
    );
};

export default Lucario;
