import React from "react";
import drag from "../DragClothes";

const skirt1: React.FC = () => {
    drag("skirt1");

    return (
        <div id="skirt1" className="skirt1">
            <img
                draggable="false"
                src={require("./skirt1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default skirt1;
