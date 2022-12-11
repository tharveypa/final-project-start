import React from "react";
import drag from "../DragClothes";

const top4: React.FC = () => {
    drag("top4");

    return (
        <div id="top4" className="top4">
            <img
                draggable="false"
                src={require("./top4")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default top4;
