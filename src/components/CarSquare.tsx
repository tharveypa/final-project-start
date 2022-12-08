import React from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import Pimp from "./Clean";
import PimpVsDestroy from "./PimpVsDestroy";

type CarSquareProps = {
    pic: string;
    description: string;
};

const CarSquare: React.FC<CarSquareProps> = (props) => {
    const { pic, description } = props;
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
                    src={require("./images/" + pic + ".png")}
                    width="50"
                    height="50"
                />
            </span>
            {description}
        </span>
    );
};

export default CarSquare;
