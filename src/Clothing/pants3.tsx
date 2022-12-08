import React from "react";
import drag from "../DragClothes";

const pants3: React.FC = () => {
    drag("pants3");

    return (
        <div id="pants3" className="pants3">
            <img
                draggable="false"
                src={require("./pants3")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default pants3;
