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
            <header className="App-header">CISC275 Final Project</header>
            <p>By: Andrew Geraci, Victor Udo, and Emmanuel Mbah</p>
            <header className="App-header">CAR APP </header>

            {/* <div className="container"></div>
            <div>
                {pos.map(
                    // eslint-disable-next-line no-extra-parens
                    (e: number): JSX.Element => (
                        <div key={e}> {e} </div>
                    )
                )}
            </div> */}
            <div>
                <Board x={pos[0]} y={pos[1]} />
            </div>

            {/* <Board pics={[]} picPosition={[0, 0]}></Board> */}
        </div>
    );
}

export default App;
