import React from "react";
import drag from "../DragClothes";

const top1: React.FC = () => {
    drag("top1");

    return (
        <div id="top1" className="top1">
            <img
                draggable="false"
                src={require("./top1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default top1;
