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
    const salt = x % 2 === 1;
    const pred = x % 3 === 0;
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(x, y, salt, pred),
        drop: () => movePic(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    return (
        <div
            ref={drop}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                border: "2px solid black"
            }}
        >
            <Square>{children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    );
};

export default BoardSquare;
