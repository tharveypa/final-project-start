import React from "react";
import drag from "../DragClothes";

const necklace2: React.FC = () => {
    drag("necklace2");

    return (
        <div id="necklace2" className="necklace2">
            <img
                draggable="false"
                src={require("./necklace2")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default necklace2;
