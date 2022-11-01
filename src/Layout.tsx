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
                            <Button>Home</Button>
                        </Col>
                        <Col>
                            <Button>Create New Room</Button>
                        </Col>
                        <Col>
                            <Button>View My Rooms</Button>
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
            </div>
        </div>
    );
};

export default Layout;
