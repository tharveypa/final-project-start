import React from "react";
import { DragSource, useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { movePic } from "./game";
import Overlay from "./Overlay";
import Square from "./Square";

type BoardSquareProps = {
    x: number;
    y: number;
    changeObject: (index: number, location: [number, number]) => void;
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y, children } = props;
    const [{ isOver, canDrop, ada }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => true,
        drop: () => props.changeObject(ada.id, [x, y]),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
            ada: monitor.getItem()
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
