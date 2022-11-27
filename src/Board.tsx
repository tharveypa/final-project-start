import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";

const renderPiece = (x: number, y: number, [picX, picY]: [number, number]) => {
    if (x === picX && y === picY) {
        return <Pic />;
    }
};

const renderSquare = (i: number, picPosition: [number, number]) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "100%" }}>
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
    const squares = [];
    for (let i = 0; i < 1; i++) {
        squares.push(renderSquare(i, picPosition));
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: "200%",
                    height: "200%",
                    display: "flex"
                }}
            >
                {squares}
            </div>
            <p>test</p>
            <p>Welcome to Jurasic Park</p>
        </DndProvider>
    );
};

export default Board;
