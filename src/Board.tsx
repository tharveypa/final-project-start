/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import { Button, Col, Container, Row } from "react-bootstrap";
import CarSquare from "./components/CarSquare";
import PimpVsDestroy from "./components/PimpVsDestroy";
import type { ToolPos, Car } from "./components/interfaces";
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
type Cars = Record<string, Car>;
type CarChanges = Record<string, ToolPos>;
type BoardProps = {
    x: number;
    y: number;
};
const Board: React.FC<BoardProps> = (props) => {
    //const [toolss, setTools] = useState<CarChanges>({});
    const { x, y } = props;
    const [carId, setCarId] = useState<string>("$");
    const [displayCars, setDisplayCars] = useState<number[]>([0]);
    const [cars, setCars] = useState<Record<string, Car>>({
        ["mo"]: {
            color: 0,
            tint: 0,
            tire: 0,
            background: 0,
            effects: {}
        }
    });
    //const [savedCars, setSavedCars] = useState<CarChanges[]>([]);
    const [displayId, setDisplayId] = useState<null | number>(null);

    function saveCar(
        carId: string,
        color: number,
        tire: number,
        tint: number,
        background: number,
        changes: CarChanges
    ) {
        const newcopy = deepCopytTools(changes);
        setCars({
            // ...cars,
            // [carId]: { color, tint, tire, background, newcopy }
            ...cars,
            [carId]: {
                color: color,
                tint: tint,
                tire: tire,
                background: background,
                effects: newcopy
            }
        });
        // setSavedCars({
        //     ...savedCars,
        //     [car]: {
        //         ...savedCars[car],
        //         [toolname]: {
        //             top: changes[toolname].top,
        //             left: changes[toolname].left,
        //             title: changes[toolname].title
        //         }
        //     }
        // });
    }
    function addCar(cars: Record<string, Car>): Record<string, Car> {
        setCarId(carId + "$");
        return {
            ...cars,
            [carId]: {
                color: 0,
                tint: 0,
                tire: 0,
                background: 7,
                effects: {
                    [""]: {
                        top: 0,
                        left: 0,
                        title: ""
                    }
                }
            }
        };
    }
    function addCarChanges(
        cars: Record<string, Car>,
        carName: number,
        newCar: Car
    ): Record<string, Car> {
        return {
            ...cars,
            [carName]: {
                ...newCar
                //effects: newCar.effects
            }
        };
    }
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

    return (
        <>
            <div>
                {/* eslint-disable-next-line no-extra-parens*/}
                {Object.keys(cars).map((key: string) => (
                    <Button key={key}>Car{key}</Button>
                ))}
            </div>
            <div>
                <DndProvider backend={HTML5Backend}>
                    <div className="getinlineplz">
                        {
                            // eslint-disable-next-line no-extra-parens
                            Object.keys(cars).map((key: string) => (
                                <Zone
                                    key={key}
                                    x={x}
                                    y={y}
                                    carId={key}
                                    toolery={cars[key].effects}
                                    color={cars[key].color}
                                    tire={cars[key].tire}
                                    tint={cars[key].tint}
                                    back={cars[key].background}
                                    saveCar={saveCar}
                                />
                            ))
                        }
                    </div>
                    <div style={{ float: "left" }}>
                        <PimpVsDestroy />
                    </div>
                </DndProvider>
            </div>
            <div>
                <Button onClick={() => setCars(addCar(cars))}> Add Car</Button>
            </div>
        </>
    );
};

export default Board;
