import React from "react";
import drag from "../DragClothes";

const necklace1: React.FC = () => {
    drag("necklace1");

    return (
        <div id="necklace1" className="necklace1">
            <img
                draggable="false"
                src={require("./necklace1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default necklace1;
