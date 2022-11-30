/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Board from "./Board";
import { CustomDragLayer } from "./CustomDragLayer";
import { DndArray } from "./components/dndarr";
//import { Dropdown } from "./components/dropdown";
//import Dndarr from "./components/dndarr";
import { FilterDropdown, SortDropdown } from "./components/dropdown";
import { Row, Col } from "react-bootstrap";
import "./App.css";
import { Box } from "./components/Box";
import { DndContext, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App(): JSX.Element {
    return (
        <div
            style={{
                width: window.innerWidth, //originally "500px"
                height: window.innerHeight,
                border: "1px solid gray"
            }}
        >
            <DndProvider backend={HTML5Backend}>
                <div
                    style={{
                        height: "600px",
                        width: "800px",
                        left: "800px",
                        top: "50px",
                        position: "absolute"
                    }}
                >
                    <CustomDragLayer></CustomDragLayer>
                    {/*<Box name="couch" id={1}></Box>*/}
                </div>
                <h1> Harleen Chahal, Sean OSullivan, Matthew Hansen </h1>
                <DndArray />
                {/*<Row style={{ height: "700px" }}>
                    <Col>
                        <FilterDropdown
                            filterOptions={["Kitchen", "Bathroom", "Bedroom"]}
                        ></FilterDropdown>
                        <SortDropdown
                            sortOptions={[
                                "Alphabetical",
                                "Tile Type",
                                "Design Type"
                            ]}
                        ></SortDropdown>
                    </Col>
                        </Row>*/}
            </DndProvider>
        </div>
    );
}

export default App;
