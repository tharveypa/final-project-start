import React from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import Pimp from "./Pimp";
import PimpVsDestroy from "./PimpVsDestroy";

type CarSquareProps = {
    pic: string;
    //description: string;
    top: number;
    left: number;
    title: string;
};

const CarSquare: React.FC<CarSquareProps> = (props) => {
    const { pic, left, top, title } = props;
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.PIC,
            pic: pic,
            top: top,
            left: left,
            title: title
            // description: description
        },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <span className="toolncar">
            <span
                ref={drag}
                style={{
                    position: "relative",
                    border: "1px dashed gray",
                    padding: "0.5 rem 1rem",
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 10,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center",
                    left: left,
                    top: top
                }}
            >
                {/* <header>{pic}</header> */}
                <img
                    src={require("./images/" + pic + ".png")}
                    width="50"
                    height="50"
                />
            </span>
            {title}
        </span>
    );
};

export default CarSquare;
