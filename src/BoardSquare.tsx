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

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y, children } = props;
    const black = false; /*(x + y) % 2 === 1;*/
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.PIC,
        drop: () => movePic(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    return (
        <div
            ref={drop}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                border: "1px solid grey"
            }}
        >
            <Square black={black}>{children}</Square>
        </div>
    );
};

export default BoardSquare;
