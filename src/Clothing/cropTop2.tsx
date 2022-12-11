import React from "react";
import drag from "../DragClothes";

const cropTop1: React.FC = () => {
    drag("cropTop2");

    return (
        <div id="cropTop2" className="cropTop2">
            <img
                draggable="false"
                src={require("./cropTop2")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default cropTop1;
