import React from "react";
import Bed1 from "./bed1";
import Bed2 from "./bed2";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";

const renderBed1 = (x: number, z: number, [picX, picY]: [number, number]) => {
    if (x === picX && z === picY) {
        return <Bed1 />;
    }
};

const renderBed2 = (x: number, z: number, [picX, picY]: [number, number]) => {
    if (x === picX && z === picY) {
        return <Bed2 />;
    }
};

const renderSquare = (i: number, picPosition: [number, number]) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "100%" }}>
            <BoardSquare x={x} y={y}>
                {renderBed1(x, y, picPosition)}
                {renderBed2(x, y, picPosition)}
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
    for (let j = 0; j < 2; j++) {
        squares.push(renderSquare(j, picPosition));
    }
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
