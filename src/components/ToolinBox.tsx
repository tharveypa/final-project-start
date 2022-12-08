import React from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import Pimp from "./Pimp";
import PimpVsDestroy from "./PimpVsDestroy";

type ToolinBoxProps = {
    pic: string;
};

const ToolinBox: React.FC<ToolinBoxProps> = (props) => {
    const { pic } = props;
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIC, pic: pic },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <span className="toolncar">
            <span
                ref={drag}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 20,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center",
                    left: 0,
                    top: 0,
                    position: "relative"
                }}
            >
                {/* <header>{pic}</header> */}
                <img
                    src={require("./images/towel.png")}
                    width="50"
                    height="50"
                />
                {console.log("hey")}
            </span>
        </span>
    );
};

export default ToolinBox;
