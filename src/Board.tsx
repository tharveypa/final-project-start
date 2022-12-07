import React, { MutableRefObject, useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Example from "./Example";

const renderSquare = (
    i: number,
    width: number,
    height: number,
    incFish: () => void,
    decFish: () => void,
    numFish: number,
    delFishX: MutableRefObject<number>,
    delFishID: MutableRefObject<number>,
    setDeleteVal: (x: number, id: string) => void,
    resetDeleteVal: () => void,
    renderDeleteVal: () => void
) => {
    const x = i;
    const y = 0;
    return (
        <div
            key={i}
            style={{
                width: width.toString() + "%",
                height: height.toString() + "%"
            }}
        >
            <Example
                x={x}
                y={y}
                width={width}
                height={height}
                incFish={incFish}
                decFish={decFish}
                numFish={numFish}
                deleteThisFish={[delFishX.current, delFishID.current]}
                delFishX={delFishX}
                delFishID={delFishID}
                setDeleteVal={setDeleteVal}
                resetDeleteVal={resetDeleteVal}
                renderDeleteVal={renderDeleteVal}
            ></Example>
        </div>
    );
};

type BoardProps = {
    numSquares: number;
    numFish: number;
    incFish: () => void;
    decFish: () => void;
};

const Board: React.FC<BoardProps> = (props) => {
    const { numSquares, numFish, incFish, decFish } = props;
    const numCol = Math.ceil(Math.sqrt(numSquares));
    const width = 100 / numCol;
    const height = 100 / Math.ceil(numSquares / numCol);
    const squares = [];
    const delFishX = useRef(-1);
    const delFishID = useRef(-1);
    const [renderDelete, setRenderDelete] = useState(true);
    const renderDeleteVal = () => {
        console.log("render delete before", renderDelete);
        console.log("render delete opposite", !renderDelete);
        setRenderDelete(!renderDelete);
        console.log("render delete after", renderDelete);
    };

    const setDeleteVal = (x: number, id: string) => {
        delFishX.current = x;
        delFishID.current = parseInt(id);
        console.log("delFishX", delFishX.current);
        console.log("delFishID", delFishID.current);
    };

    const resetDeleteVal = () => {
        delFishX.current = -1;
        delFishID.current = -1;
    };

    for (let i = 0; i < numSquares; i++) {
        squares.push(
            renderSquare(
                i,
                width,
                height,
                incFish,
                decFish,
                numFish,
                delFishX,
                delFishID,
                setDeleteVal,
                resetDeleteVal,
                renderDeleteVal
            )
        );
    }
    console.log("deleteX board", delFishX);
    console.log("deleteID board", delFishID);

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
