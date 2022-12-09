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
    const [pos, setPos] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const MouseTracker = (e: MouseEvent) => {
            setPos([e.clientX, e.clientY]);
        };
        container.addEventListener("mousemove", MouseTracker);

        const cleanup = () => {
            container.removeEventListener("mousemove", MouseTracker);
        };

        return cleanup;
    }, []);
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
    function saveCar(toolname: string, changes: CarChanges) {
        setCarId(carId + 1);
        setCars({
            ...cars,
            [carId]: {
                ...cars[carId],
                [toolname]: {
                    top: changes[toolname].top,
                    left: changes[toolname].left,
                    title: changes[toolname].title
                }
            }
        });
    }
    return (
        <>
            <div>
                {Object.keys(cars).map((key: string) => (
                    <Button key={key}>Car {key}</Button>
                ))}
            </div>
            <DndProvider backend={HTML5Backend}>
                <div>
                    <PimpVsDestroy></PimpVsDestroy>
                    <div className="getinlineplz">
                        <Zone
                            x={0}
                            y={0}
                            toolery={toolss}
                            currAah={aah}
                            saveCar={saveCar}
                        />
                    </div>
                </div>
            </DndProvider>
        </>
    );
};

export default Board;
