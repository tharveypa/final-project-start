import React, { useState } from "react";
import "./App.css";
import PimpVsDestroy from "./components/PimpVsDestroy";
import Board from "./Board";
//import Car from "./components/Car";
//import DirtTool from "./components/Destroy Tools/DirtTool";
import CarSpace from "./components/CarSpace";
import { Col, Row } from "react-bootstrap";
import type { ToolPos } from "./components/interfaces";
// DragItem,
type CarChanges = Record<string, ToolPos>;
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
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <header className="App-header">CAR APP </header>
            <div>
                {/* <Board
                    tools={[
                        "Wipe Car",
                        "Shine Car",
                        "Fill Tires",
                        "Repair Windows",
                        "etc"
                    ]}
                    picPosition={[0, 0]}
                /> */}
                <CarSpace
                    saveCar={saveCar}
                    tools={[
                        "Wipe Car",
                        "Shine Car",
                        "Fill Tires",
                        "Repair Windows",
                        "etc"
                    ]}
                ></CarSpace>
                {/* <Row></Row>
                <Row>
                    <Col>
                        <PimpVsDestroy></PimpVsDestroy>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row> */}
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
