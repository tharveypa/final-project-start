import React from "react";
import drag from "../DragClothes";

const hat2: React.FC = () => {
    drag("hat2");

    return (
        <div id="hat2" className="hat2">
            <img
                draggable="false"
                src={require("./hat2")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default hat2;
