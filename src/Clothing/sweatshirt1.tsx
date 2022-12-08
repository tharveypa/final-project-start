import React from "react";
import drag from "../DragClothes";

const sweatshirt1: React.FC = () => {
    drag("sweatshirt1");

    return (
        <div id="sweatshirt1" className="sweatshirt1">
            <img
                draggable="false"
                src={require("./sweatshirt1")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default sweatshirt1;
