import React from "react";
import drag from "../DragClothes";

const skirt4: React.FC = () => {
    drag("skirt4");

    return (
        <div id="skirt4" className="skirt4">
            <img
                draggable="false"
                src={require("./skirt4")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default skirt4;
