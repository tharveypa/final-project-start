import React from "react";
import drag from "../DragClothes";

const jacket1: React.FC = () => {
    drag("jacket1");

    return (
        <div id="jacket1" className="jacket1">
            <img
                draggable="false"
                src={require("./jacket1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default jacket1;
