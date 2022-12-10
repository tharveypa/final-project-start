/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import PimpVsDestroy from "./components/PimpVsDestroy";
import Board from "./Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CarSpace from "./components/CarSpace";
import { Col, Row } from "react-bootstrap";
import type { ToolPos } from "./components/interfaces";
// DragItem,
type CarChanges = Record<string, ToolPos>;
import CarSquare from "./components/CarSquare";
import ToolinBox from "./components/ToolinBox";

function App(): JSX.Element {
    const [savedCars, setSavedCars] = useState<Record<number, CarChanges>>({});

    function saveCar(car: number, toolname: string, changes: CarChanges) {
        setSavedCars({
            ...savedCars,
            [car]: {
                ...savedCars[car],
                [toolname]: {
                    top: changes[toolname].top,
                    left: changes[toolname].left,
                    title: changes[toolname].title
                }
            }
        });
    }
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
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <header className="App-header">CAR APP </header>
            {/* <Board pics={[]} picPosition={[0, 0]}></Board> */}
            <div>
                <DndProvider backend={HTML5Backend}>
                    <div style={{ float: "left" }}>
                        <PimpVsDestroy />
                    </div>
                    <div className="container">
                        <Board x={pos[0]} y={pos[1]} />
                        <div>
                            {pos.map(
                                // eslint-disable-next-line no-extra-parens
                                (e: number): JSX.Element => (
                                    <div key={e}> {e} </div>
                                )
                            )}
                        </div>
                    </div>
                </DndProvider>
            </div>
        </div>
    );
}

export default App;
