import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import Overlay from "./Overlay";
import Square from "./Square";

type BoardSquareProps = {
    x: number;
    y: number;
    changeObject: (index: number, location: [number, number]) => void;
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y, children } = props;
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => true,
        drop: (item: { type: string; id: number }) =>
            props.changeObject(item.id, [x, y]),
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
                border: "1px solid gray"
            }}
        >
            <Square>{children}</Square>
            {isOver && canDrop && <Overlay color="grey" />}
        </div>
    );
};

export default BoardSquare;
