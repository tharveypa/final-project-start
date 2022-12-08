import React from "react";
import drag from "../DragClothes";

const top2: React.FC = () => {
    drag("top2");

    return (
        <div id="top2" className="top2">
            <img
                draggable="false"
                src={require("./top2")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default top2;
