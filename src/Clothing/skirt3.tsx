import React from "react";
import drag from "../DragClothes";

const skirt3: React.FC = () => {
    drag("skirt3");

    return (
        <div id="skirt3" className="skirt3">
            <img
                draggable="false"
                src={require("./skirt3")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default skirt3;
