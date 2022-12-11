import React from "react";
import drag from "../DragClothes";

const shorts2: React.FC = () => {
    drag("shorts2");

    return (
        <div id="shorts2" className="shorts2">
            <img
                draggable="false"
                src={require("./shorts2")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default shorts2;
