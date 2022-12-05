import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import Overlay from "./Overlay";
import Square from "./Square";
import { Furniture } from "./Interfaces/furniture";

type BoardSquareProps = {
    x: number;
    FurnitureInRoom: Furniture[];
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, FurnitureInRoom, children } = props;
    const black = false;
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => x === FurnitureInRoom.length,
        drop: (item, monitor) => ({
            item: FurnitureInRoom[x],
            monitor: monitor
        }),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    return (
        <div
            ref={drop}
            style={{ position: "relative", width: "100%", height: "100%" }}
        >
            <Square black={black}>{children}</Square>
            {!isOver && canDrop && <Overlay color="yellow" />}
        </div>
    );
};

export default BoardSquare;
