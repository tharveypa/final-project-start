/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import FurnitureList from "./components/FurnitureList";

import "./styles/Layout.css";
import "./styles/index.css";
import RoomBoard from "./components/RoomBoard";

const roomImages: string[] = ["empty", "z-style", "suite-style"];

const Layout = () => {
    const [roomChoicesShown, setRoomChoiceVisibility] = useState(false);
    const [roomChoice, setRoomChoice] = useState("empty");

    function changeRoomType(r: string): void {
        setRoomChoice(r);
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div id="grid">
                <div id="logo-container">
                    <img
                        src={require("./images/UDormLogo.png")}
                        width="150"
                        height="100"
                    />
                </div>
                <div
                    id="left-menu-container"
                    style={{ backgroundColor: "#2e57b8" }}
                >
                    <Container>
                        <Row>
                            <Button>Clear Room</Button>
                        </Row>
                        <Row>
                            <div
                                onMouseEnter={() =>
                                    setRoomChoiceVisibility(true)
                                }
                                onMouseLeave={() =>
                                    setRoomChoiceVisibility(false)
                                }
                            >
                                Select Different Room Type
                                {roomChoicesShown && (
                                    <div>
                                        <Button
                                            onClick={() =>
                                                changeRoomType("suite-style")
                                            }
                                        >
                                            Suite Style
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </Row>
                        <Row>
                            <Button>Save Room</Button>
                        </Row>
                        <FurnitureList />
                    </Container>
                </div>
                <div id="top-menu-container">
                    <Container>
                        <Row>
                            <Col>
                                <Button
                                    style={{ backgroundColor: "transparent" }}
                                >
                                    <img
                                        src={require("./images/homeButton.png")}
                                        width="75"
                                        height="30"
                                    />
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    style={{ backgroundColor: "transparent" }}
                                >
                                    <img
                                        src={require("./images/newRoomButton.png")}
                                        width="150"
                                        height="40"
                                    />
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    style={{ backgroundColor: "transparent" }}
                                >
                                    <img
                                        src={require("./images/viewRoomsButton.png")}
                                        width="120"
                                        height="40"
                                    />
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id="main-board-container">
                    <RoomBoard>{null}</RoomBoard>
                </div>
            </div>
        </DndProvider>
    );
};

export default Layout;
