import React from "react";
import drag from "../DragClothes";

const dress3: React.FC = () => {
    drag("dress3");

    return (
        <div id="dress3" className="dress3">
            <img
                draggable="false"
                src={require("./dress3")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default dress3;
