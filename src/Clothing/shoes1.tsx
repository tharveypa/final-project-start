import React from "react";
import drag from "../DragClothes";

const shoes1: React.FC = () => {
    drag("shoes1");

    return (
        <div id="shoes1" className="shoes1">
            <img
                draggable="false"
                src={require("./shoes1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default shoes1;
