import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Example from "./Example";

const renderSquare = (
    i: number,
    picPosition: [number, number],
    width: number,
    height: number,
    incFish: () => void,
    decFish: () => void,
    numFish: number,
    deleteThisFish: [number, number],
    setDeleteVal: (x: number, id: string) => void,
    resetDeleteVal: () => void
) => {
    const x = i;
    const y = 0;
    console.log("numFish", numFish);

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
                deleteThisFish={deleteThisFish}
                setDeleteVal={setDeleteVal}
                resetDeleteVal={resetDeleteVal}
            ></Example>
        </div>
    );
};

type BoardProps = {
    picPosition: [number, number];
    numSquares: number;
    tank_ID: [][];
    addFishToID: (x: number, id: string) => void;
    numFish: number;
    incFish: () => void;
    decFish: () => void;
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition, numSquares, numFish, incFish, decFish } = props;
    const numCol = Math.ceil(Math.sqrt(numSquares));
    const width = 100 / numCol;
    const height = 100 / Math.ceil(numSquares / numCol);
    const squares = [];
    const [deleteThisFish, setDeleteThisFish] = useState<[number, number]>([
        -1, -1
    ]);
    console.log(deleteThisFish);

    const setDeleteVal = (x: number, id: string) => {
        setDeleteThisFish([x, parseInt(id)]);
    };

    const resetDeleteVal = () => {
        setDeleteThisFish([-1, -1]);
    };

    for (let i = 0; i < numSquares; i++) {
        squares.push(
            renderSquare(
                i,
                picPosition,
                width,
                height,
                incFish,
                decFish,
                numFish,
                deleteThisFish,
                setDeleteVal,
                resetDeleteVal
            )
        );
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
