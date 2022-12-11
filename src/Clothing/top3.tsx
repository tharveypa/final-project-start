import React from "react";
import drag from "../DragClothes";

const top3: React.FC = () => {
    drag("top3");

    return (
        <div id="top3" className="top3">
            <img
                draggable="false"
                src={require("./top3")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default top3;
