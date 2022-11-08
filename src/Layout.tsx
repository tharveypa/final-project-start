import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

import Board from "./Board";

import "./Layout.css";
import "./index.css";

interface Props {
    picPosition: [number, number];
}

const Layout = ({ picPosition }: Props) => {
    return (
        <div id="grid">
            <div id="logo-container">
                <img
                    src={require("./UDormLogo.png")}
                    width="150"
                    height="100"
                />
            </div>
            <div id="left-menu-container">Menu Left</div>
            <div id="top-menu-container">
                <Container>
                    <Row>
                        <Col>
                            <Button>
                                <img
                                    src={require("./homeButton.png")}
                                    width="75"
                                    height="30"
                                />
                            </Button>
                        </Col>
                        <Col>
                            <Button>
                                <img
                                    src={require("./newRoomButton.png")}
                                    width="150"
                                    height="40"
                                />
                            </Button>
                        </Col>
                        <Col>
                            <Button>
                                {" "}
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
