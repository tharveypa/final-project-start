/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

import Board from "./Board";

import "./Layout.css";
import "./index.css";

interface Props {
    picPosition: [number, number];
}

//const roomImages: string[] = ["empty", "z-style", "suite-style"];

const Layout = ({ picPosition }: Props) => {
    const [roomChoicesShown, setRoomChoiceVisibility] = useState(false);
    //const [roomChoice, setRoomChoice] = useState("empty");

    return (
        <div id="grid">
            <div id="logo-container">
                <img
                    src={require("./UDormLogo.png")}
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
                            onMouseEnter={() => setRoomChoiceVisibility(true)}
                            onMouseLeave={() => setRoomChoiceVisibility(false)}
                        >
                            Select Different Room Type
                            {roomChoicesShown && (
                                <div>
                                    <Button>Suite Style</Button>
                                </div>
                            )}
                        </div>
                    </Row>
                    <Row>
                        <Button>Save Room</Button>
                    </Row>
                </Container>
            </div>
            <div id="top-menu-container">
                <Container>
                    <Row>
                        <Col>
                            <Button style={{ backgroundColor: "transparent" }}>
                                <img
                                    src={require("./homeButton.png")}
                                    width="75"
                                    height="30"
                                />
                            </Button>
                        </Col>
                        <Col>
                            <Button style={{ backgroundColor: "transparent" }}>
                                <img
                                    src={require("./newRoomButton.png")}
                                    width="150"
                                    height="40"
                                />
                            </Button>
                        </Col>
                        <Col>
                            <Button style={{ backgroundColor: "transparent" }}>
                                <img
                                    src={require("./viewRoomsButton.png")}
                                    width="120"
                                    height="40"
                                />
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="main-board-container">
                <div
                    style={{
                        width: "500px",
                        height: "500px",
                        border: "1px solid gray"
                    }}
                >
                    <Board picPosition={picPosition} />
                </div>
                <p>
                    Group Members: Jackson Gunn Pack, Maxyne Watkins, Ethan
                    Hogan
                </p>
            </div>
        </div>
    );
};

export default Layout;
