/* eslint-disable no-extra-parens */
import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import type { Furniture } from "./components/types";

import FurnitureList from "./components/FurnitureList";
import RoomBoard from "./components/RoomBoard";

import "./styles/Layout.css";
import "./styles/index.css";

// const roomImages: string[] = ["empty", "z-style", "suite-style"];

const Layout = () => {
    const [roomChoicesShown, setRoomChoiceVisibility] = useState(false);
    // const [roomChoice, setRoomChoice] = useState("empty");

    const [furnitureInRoomBoard, setFurnitureInRoomBoard] = useState<
        Furniture[]
    >([]);

    const addToRoomBoard = (item: Furniture, left: number, top: number) => {
        console.log("ADD TO ROOM BOARD");
        console.log("ID:", item.id);
        console.log("HEIGHT:", item.height);
        console.log("WIDTH:", item.width);
        console.log("TOP:", top);
        console.log("LEFT:", left);
        const newId = `${item.name}${furnitureInRoomBoard.length + 1}`;
        const newItem = { ...item, id: newId, left: left, top: top };
        const newList = [...furnitureInRoomBoard, newItem];
        setFurnitureInRoomBoard(newList);
    };

    const clearRoomBoard = () => {
        console.log("CLEARING ROOM");
        setFurnitureInRoomBoard([]);
    };

    const moveFurniture = useCallback(
        (id, left, top) => {
            console.log("MOVE FURNITURE");
            const newItems = furnitureInRoomBoard.map((item) => {
                console.log("ITEM:", item.id);
                return item.id === id
                    ? { ...item, top: top, left: left }
                    : item;
            });
            console.log("ID:", id);
            console.log("TOP:", top);
            console.log("LEFT:", left);
            console.log(newItems);
            setFurnitureInRoomBoard(newItems);
        },
        [furnitureInRoomBoard]
    );

    useEffect(() => {
        console.log("objects");
        console.log(furnitureInRoomBoard);
    }, [furnitureInRoomBoard]);

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
                            <Button onClick={() => clearRoomBoard()}>
                                Clear Room
                            </Button>
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
                                        <Button>Suite Style</Button>
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
                    <RoomBoard
                        furnitureInRoomBoard={furnitureInRoomBoard}
                        moveFurniture={moveFurniture}
                        addToRoomBoard={addToRoomBoard}
                    />
                </div>
            </div>
        </DndProvider>
    );
};

export default Layout;
