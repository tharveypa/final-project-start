import React from "react";
import drag from "../DragClothes";

const top6: React.FC = () => {
    drag("top6");

    return (
        <div id="top6" className="top6">
            <img
                draggable="false"
                src={require("./top6")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default top6;
