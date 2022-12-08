import React from "react";
import drag from "../DragClothes";

const pants2: React.FC = () => {
    drag("pants2");

    return (
        <div id="pants2" className="pants2">
            <img
                draggable="false"
                src={require("./pants2")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default pants2;
