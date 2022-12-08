import React from "react";
import drag from "../DragClothes";

const sweatshirt2: React.FC = () => {
    drag("sweatshirt2");

    return (
        <div id="sweatshirt2" className="sweatshirt2">
            <img
                draggable="false"
                src={require("./sweatshirt2")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default sweatshirt2;
