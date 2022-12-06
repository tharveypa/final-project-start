import React, { Fragment } from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import PimpVsDestroy from "./PimpVsDestroy";

type CarSquareProps = {
    pic: string;
};

const CarSquare: React.FC<CarSquareProps> = ({ pic }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIC, pic: pic },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <div>
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 50,
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
                    src={require("./images/dirt.png")}
                    width="80"
                    height="80"
                />
            </div>
        </div>
    );
};

export default CarSquare;
