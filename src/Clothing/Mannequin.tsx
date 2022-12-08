// import React from "react";
// import { Button } from "react-bootstrap";
// import "../constants";
// import "./Clothing";
// import { DropTargetMonitor } from "react-dnd";
// import { useDrop } from "react-dnd";

// const Mannequin:

import React from "react";
import drag from "../DragClothes";

const Mannequin: React.FC = () => {
    drag("Mannequin");

    return (
        <div id="Mannequin" className="Mannequin">
            <img
                draggable="false"
                src={require("./Mannequin")}
                width="100"
                height="100"
            />
        </div>
    );
};

export default Mannequin;
