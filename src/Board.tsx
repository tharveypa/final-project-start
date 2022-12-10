/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import { Button, Col, Container, Row } from "react-bootstrap";
import CarSquare from "./components/CarSquare";
import PimpVsDestroy from "./components/PimpVsDestroy";
import type { ToolPos } from "./components/interfaces";
import Zone from "./components/Zone";

export const renderPiece = (
    x: number,
    y: number,
    pic: string,
    [picX, picY]: [number, number]
) => {
    if (x === picX && y === picY) {
        //addTool();
        return <Pic pic={pic} top={y} left={x} title={pic} />;

        // return <CarSquare pic={pic} />;
    }
};

// const renderSquare = (j: number, i: number, pics: string[]) => {
//     const x = j;
//     const y = i;

//     // const [tool, setTool] = useState<number>(0);

//     // function moreTools(): void {
//     //     setTool(tool + 1);
//     //     // tool;
//     // }

//     return (
//         <>
//             <div>
//                 {/* | board squares x={x}-{picPosition[0]}, y={y}-{picPosition[1]} */}
//                 <div key={i} style={{ width: "300px", height: "300px" }}>
//                     <BoardSquare x={x} y={y} toolery={pics} saveCar={saveCar}>
//                         {
//                             //renderPiece(x, y, "yeet", picPosition)
//                         }
//                     </BoardSquare>
//                 </div>
//             </div>
//         </>
//     );
// };

type CarChanges = Record<string, ToolPos>;
type Cars = Record<number, CarChanges>;
type BoardProps = {
    tools: string[];
};
const Board: React.FC<BoardProps> = (props) => {
    const [toolss, setTools] = useState<CarChanges>({});
    const { tools } = props;
    const [aah, setAah] = useState<string>("");
    const squares = [];
    const [carId, setCarId] = useState<number>(0);
    const [cars, setCars] = useState<Cars>({});
    //squares.push(renderSquare(0, picPosition, pics));
    //for (let i = 0; i < 2; i++) {
    //squares.push(renderSquare(0, 0, tools));
    // for (let j = 0; j < 2; j++) {
    //     squares.push(renderSquare(j, i, tools));
    //squares.push(renderSquare(0, 0, pics, picPosition));
    // for (let i = 0; i < 2; i++) {
    //     for (let j = 0; j < 1; j++) {
    //         squares.push(renderSquare(j, i, pics, picPosition));
    //     }
    // }
    function deepCopytTools(changes: CarChanges): CarChanges {
        // Need to describe how to clone each element
        const copy: CarChanges = {};
        Object.keys(changes).map((aha: string) => {
            copy[aha].top = changes[aha].top;
            copy[aha].left = changes[aha].left;
            copy[aha].title = changes[aha].title;
        });
        return copy;
    }
    function saveCar(toolname: number, changes: CarChanges) {
        setCarId(carId + 1);
        //         const copies: Record<number, CarChanges> = Object.fromEntries(
        //     // Convert the array to an array of pairs, where each pair has the abbreviation
        //     // and the state.
        //     usaStates.map((state: State): [string, State] => [state.abbreviation, state])
        // );
        // Object.keys(cars).map((aha: number) => {
        //     copies[aha] = deepCopytTools(cars[aha]);
        // });
        const newcopy = deepCopytTools(changes);
        // setCars({
        //     ...cars,
        //     [carId]: {
        //         newcopy
        //     }
        // });
    }
    return (
        <>
            <div>
                {/* eslint-disable-next-line no-extra-parens*/}
                {Object.keys(cars).map((key: string) => (
                    <Button key={key}>Car {key}</Button>
                ))}
            </div>
            <div>
                <div className="getinlineplz">
                    <Zone x={10} y={0} toolery={toolss} saveCar={saveCar} />
                </div>
            </div>
        </>
    );
};

export default Board;
