import React from "react";
import drag from "../DragClothes";

const dress2: React.FC = () => {
    drag("dress2");

    return (
        <div id="dress2" className="dress2">
            <img
                draggable="false"
                src={require("./dress2")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default dress2;
