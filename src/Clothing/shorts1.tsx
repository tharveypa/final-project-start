import React from "react";
import drag from "../DragClothes";

const shorts1: React.FC = () => {
    drag("shorts1");

    return (
        <div id="shorts1" className="shorts1">
            <img
                draggable="false"
                src={require("./shorts1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default shorts1;
