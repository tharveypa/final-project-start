import React from "react";
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
    height: number
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
            <Example x={x} y={y} width={width} height={height}></Example>
        </div>
    );
};
// <BoardSquare x={x} y={y} ></BoardSquare> instead of example
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
    for (let i = 0; i < numSquares; i++) {
        squares.push(renderSquare(i, picPosition, width, height));
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
