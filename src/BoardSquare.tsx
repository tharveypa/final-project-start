import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { tileItem } from "./interfaces";
import Overlay from "./Overlay";
import Square from "./Square";

type BoardSquareProps = {
    x: number;
    y: number;
    changeTile: (
        index: number,
        location: [number, number],
        color: string,
        tags: string[],
        snap: string,
        src: string
    ) => void;
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y, children } = props;
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.snap,
        canDrop: () => true,
        drop: (item: { type: string; tile: tileItem }) =>
            props.changeTile(
                item.tile.id,
                [x, y],
                item.tile.name,
                item.tile.tags,
                item.tile.snap,
                item.tile.src
            ),
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
