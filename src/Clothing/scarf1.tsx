import React from "react";
import drag from "../DragClothes";

const scarf1: React.FC = () => {
    drag("scarf1");

    return (
        <div id="scarf1" className="scarf1">
            <img
                draggable="false"
                src={require("./scarf1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default scarf1;
