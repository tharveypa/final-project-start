/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canMovePic, movePic } from "./game";
import Overlay from "./Overlay";
import Square from "./Square";

type BoardSquareProps = {
    x: number;
    y: number;
};

const PicSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y } = props;
    //const black = false; /*(x + y) % 2 === 1;*/ /*TEST*/
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(x, y),
        drop: () => movePic(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    return (
        <div
            ref={drop}
            style={{ position: "relative", width: "100%", height: "100%" }}
        ></div>
    );
};

export default PicSquare;
