import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";

const renderPiece = (
    x: number,
    y: number,
    [picX, picY]: [number, number],
    pic: string
) => {
    if (x === picX && y === picY) {
        return <Pic pic={pic} />;
    }
};

const renderSquare = (i: number, picPosition: [number, number], p: string) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "50%" }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, picPosition, p)}
            </BoardSquare>
        </div>
    );
};

type BoardProps = {
    pics: string[];
    picPosition: [number, number];
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    const { pics } = props;
    const squares = [];
    //let i=0;
    //pics.map((p:string)=>(
    //));
    for (let i = 0; i < 4; i++) {
        squares.push(renderSquare(i, picPosition, pics[i]));
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
