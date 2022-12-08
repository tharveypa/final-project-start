import React from "react";
import drag from "../DragClothes";

const skirt2: React.FC = () => {
    drag("skirt2");

    return (
        <div id="skirt2" className="skirt2">
            <img
                draggable="false"
                src={require("./skirt2")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default skirt2;
