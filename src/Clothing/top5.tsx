import React from "react";
import drag from "../DragClothes";

const top5: React.FC = () => {
    drag("top5");

    return (
        <div id="top5" className="top5">
            <img
                draggable="false"
                src={require("./top5")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default top5;
