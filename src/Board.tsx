import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import { observeItem } from "./interfaces";

const renderPiece = (x: number, y: number, object: observeItem[]) => {
    const location = object.filter(
        (o: observeItem): boolean => x === o.position[0] && y === o.position[1]
    );
    if (location.length > 0) {
        return <Pic color={"red"} id={location[0].id} />;
    }
};

const renderSquare = (
    x: number,
    y: number,
    object: observeItem[],
    changeObject: (index: number, location: [number, number]) => void
) => {
    return (
        <div
            className="square"
            key={((x + y) * (x + y + 1)) / 2 + x}
            style={{ width: "20%", height: "20%" }}
        >
            <BoardSquare x={x} y={y} changeObject={changeObject}>
                {renderPiece(x, y, object)}
            </BoardSquare>
        </div>
    );
};

type BoardProps = {
    object: observeItem[];
    changeObject: (index: number, location: [number, number]) => void;
    x: number;
    y: number;
};

const Board: React.FC<BoardProps> = (props) => {
    const squares = [];

    for (let i = 0; i < props.y; i++) {
        for (let j = 0; j < props.x; j++) {
            squares.push(renderSquare(j, i, props.object, props.changeObject));
        }
    }
    const square = document.querySelectorAll<HTMLElement>(".square");
    square.forEach((ele) => {
        ele.style.width = 100 / props.x + "%";
        ele.style.height = 100 / props.y + "%";
    });

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                {squares}
            </div>
        </DndProvider>
    );
};

export default Board;
