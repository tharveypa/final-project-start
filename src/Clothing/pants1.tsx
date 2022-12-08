import React from "react";
import drag from "../DragClothes";

const pants1: React.FC = () => {
    drag("pants1");

    return (
        <div id="pants1" className="pants1">
            <img
                draggable="false"
                src={require("./pants1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default pants1;
