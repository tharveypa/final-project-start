import React, { useState } from "react";
import Pic from "../Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragTile } from "../Interfaces/DragTile";
import BoardSquare from "../BoardSquare";

const renderPiece = (x: number, y: number, [picX, picY]: [number, number]) => {
    if (x === picX && y === picY) {
        return <Pic />;
    }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderSquare = (i: number, picPosition: [number, number]) => {
    const x: number = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "100%" }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, picPosition)}
            </BoardSquare>
        </div>
    );
};

type ArrProps = {
    picPosition: [number, number];
};

const Dndarr: React.FC<ArrProps> = (_props) => {
    const test: DragTile = {
        type: "string",
        design: "string",
        pos: [0, 0],
        graphic: "string", //file name
        name: "string",
        size: [0, 0],
        id: 0,
        hasFurniture: false,
        hasPainting: false,
        placeOnWall: false,
        isFill: false
    };
    const test2: DragTile = {
        type: "string",
        design: "string",
        pos: [0.5, 0.5],
        graphic: "string", //file name
        name: "string",
        size: [0, 0],
        id: 0,
        hasFurniture: false,
        hasPainting: false,
        placeOnWall: false,
        isFill: false
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [dragarr, setarr] = useState<DragTile[]>([test, test2]); //, test2]);
    //we will likely have this be in a higher component that will pass down the filled array
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
                {/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/}
                {dragarr.map((_dnd: DragTile, _i: number) => {
                    // eslint-disable-next-line react/jsx-key
                    return <Pic />;
                })}
            </div>
        </DndProvider>
    );
};

export default Dndarr;
