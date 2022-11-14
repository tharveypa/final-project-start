import React, { CSSProperties, FC } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";

export interface BoxProps {
    left: number;
    top: number;
}

const styleC: CSSProperties = {
    height: "5rem",
    position: "absolute",
    width: "5rem",
    color: "white",
    padding: "1rem"
};

const Pic: FC<BoxProps> = ({ left, top }) => {
    const [isDragging, drag] = useDrag({
        item: { type: ItemTypes.PIC },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });

    return (
        <div
            ref={drag}
            style={{
                ...styleC,
                opacity: isDragging ? 1 : 0.5,
                backgroundColor: "red",
                top: top + "px",
                left: left + "px"
            }}
        ></div>
    );
};

export default Pic;
