import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import { Button } from "react-bootstrap";

const renderPiece = (x: number, y: number, [picX, picY]: [number, number]) => {
    if (x === picX && y === picY) {
        return <Pic />;
    }
};

const renderSquare = (i: number, picPosition: [number, number]) => {
    const x = i;
    const y = 0;

    return (
        <div
            key={i}
            style={{ width: "10%", height: "10%", border: "1px solid gray" }}
        >
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, picPosition)}
            </BoardSquare>
        </div>
    );
};

type BoardProps = {
    picPosition: [number, number];
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    let squares = [];
    for (let i = 0; i < 100; i++) {
        squares.push(renderSquare(i, picPosition));
    }
    return (
        <>
            <Button
                onClick={() => {
                    squares = [];
                }}
            >
                {" "}
                Clear{" "}
            </Button>
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
        </>
    );
};

export default Board;
