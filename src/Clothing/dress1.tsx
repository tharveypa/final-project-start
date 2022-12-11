import React from "react";
import drag from "../DragClothes";

const dress1: React.FC = () => {
    drag("dress1");

    return (
        <div id="dress1" className="dress1">
            <img
                draggable="false"
                src={require("./dress1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default dress1;
