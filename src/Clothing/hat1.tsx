import React from "react";
import drag from "../DragClothes";

const hat1: React.FC = () => {
    drag("hat1");

    return (
        <div id="hat1" className="hat1">
            <img
                draggable="false"
                src={require("./hat1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default hat1;
