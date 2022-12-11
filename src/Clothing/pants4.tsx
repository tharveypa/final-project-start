import React from "react";
import drag from "../DragClothes";

const pants4: React.FC = () => {
    drag("pants4");

    return (
        <div id="pants4" className="pants4">
            <img
                draggable="false"
                src={require("./pants4")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default pants4;
