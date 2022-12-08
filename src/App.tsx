/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Board from "./Board";
import { CustomDragLayer } from "./CustomDragLayer";
import { DndArray } from "./components/dndarr";
//import { Dropdown } from "./components/dropdown";
//import Dndarr from "./components/dndarr";
import { FilterDropdown, SortDropdown } from "./components/dropdown";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import "./App.css";
import { Box } from "./components/Box";
import { DndContext, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { setConstantValue } from "typescript";
import { Menu } from "./Menu";

function App(): JSX.Element {
    const [scale, setScale] = useState<number>(1);
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
                    <CustomDragLayer scale={scale}></CustomDragLayer>
                    {/*<Box name="couch" id={1}></Box>*/}
                </div>
                <h1> Harleen Chahal, Sean OSullivan, Matthew Hansen </h1>
                <Form.Group>
                    <Form.Label>Scale</Form.Label>
                    <Form.Control
                        type="number"
                        value={scale}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) =>
                            setScale(
                                parseInt(event.target.value)
                                    ? parseInt(event.target.value)
                                    : 1
                            )
                        }
                    />
                </Form.Group>
                <Row xs={4} md={8} lg={12}>
                    <Col>
                        <FilterDropdown
                            filterOptions={["Kitchen", "Bathroom", "Bedroom"]}
                        ></FilterDropdown>
                    </Col>
                    <Col>
                        <SortDropdown
                            sortOptions={[
                                "Alphabetical",
                                "Tile Type",
                                "Design Type"
                            ]}
                        ></SortDropdown>
                    </Col>
                </Row>
                <Menu></Menu>
                {/*<DndArray />
                <Row style={{ height: "700px" }}>
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
