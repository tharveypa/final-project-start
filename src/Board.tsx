import React, { useState } from "react";
import update from "immutability-helper";
//import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
//import BoardSquare from "./BoardSquare";
//import { Container } from "./Container";
import Example from "./Example";

/*
const renderPiece = (x: number, y: number, [picX, picY]: [number, number]) => {
    if (x === picX && y === picY) {
        return <Pic />;
    }
};
*/

const renderSquare = (
    i: number,
    picPosition: [number, number],
    width: number,
    height: number,
    incFish: () => void,
    decFish: () => void,
    numFish: number,
    addFishToID: (x: number, id: string) => void,
    removeFishNotInTank: (x: number, id: string) => void
) => {
    const x = i;
    const y = 0;
    console.log(numFish);

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
                addFishToID={addFishToID}
                removeFishNotInTank={removeFishNotInTank}
            ></Example>
        </div>
    );
};

type BoardProps = {
    picPosition: [number, number];
    numSquares: number;
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition, numSquares } = props;
    const numCol = Math.ceil(Math.sqrt(numSquares));
    const width = 100 / numCol;
    const height = 100 / Math.ceil(numSquares / numCol);
    const squares = [];
    const [tank_ID, setTank_ID] = useState(
        Array(numSquares).fill(Array(0).fill(null))
    );
    const addFishToID = (x: number, id: string) => {
        console.log(x);
        const newTank = [...tank_ID];
        const new_TankID = [...newTank[x]];
        console.log("mid");
        console.log(new_TankID);
        new_TankID.push(id);
        console.log("end");
        console.log(new_TankID);
        newTank.splice(x, 1, new_TankID);
        setTank_ID(newTank);
    };
    const removeFishFromID = (x: number, id: string) => {
        const new_TankID = [...tank_ID];
        new_TankID[x].filter((thisID: string): boolean => thisID != id);
        setTank_ID(new_TankID);
    };
    const removeFishNotInTank = (x: number, id: string) => {
        const new_TankID = [...tank_ID];
        new_TankID.map((thisTank: [string]) =>
            new_TankID.indexOf(thisTank) !== x
                ? thisTank.filter((thisID: string): boolean => thisID != id)
                : thisTank
        );
        setTank_ID(new_TankID);
    };
    console.log(tank_ID);
    const [numFish, setNumFish] = useState(0);
    const incFish = () => {
        setNumFish(numFish + 1);
    };

    const decFish = () => {
        setNumFish(numFish - 1);
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
                addFishToID,
                removeFishNotInTank
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

/*
This is the former menu file:

import React from "react";
import { Container } from "react-bootstrap";
//import { useDrop } from "react-dnd";
import fish_data_json from "../data/fish.json";
//import { Fish } from "../interfaces/Fish";

const Menu: React.FC = () => {
    return (
        <div className="bg-blue border m-2 p-2">
            <Container>
                <b>Menu</b>
                {fish_data_json.map((f) => {
                    <img src={require(f.image)} width="100%" height="100%" />;
                })}
            </Container>
        </div>
    );
};
export default Menu;
*/
