/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import React, { useState, useCallback, useEffect } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import type { Furniture } from "./components/types";

import FurnitureList from "./components/FurnitureList";
import RoomBoard from "./components/RoomBoard";

import "./styles/Layout.css";
import "./styles/index.css";

const roomImages: string[] = ["empty", "z-style", "suite-style"];

interface SavedRoom {
    id: number;
    furniture: Furniture[];
}

const Layout = () => {
    const [roomChoicesShown, setRoomChoiceVisibility] = useState(false);
    const [roomChoice, setRoomChoice] = useState("empty");
    const [savedRooms, setSavedRooms] = useState<SavedRoom[]>([]);

    function changeRoomType(r: string): void {
        setRoomChoice(r);
    }

    const [furnitureInRoomBoard, setFurnitureInRoomBoard] = useState<
        Furniture[]
    >([]);

    const addToRoomBoard = (item: Furniture, left: number, top: number) => {
        const newId = `${item.name}${furnitureInRoomBoard.length + 1}`;
        const newItem = { ...item, id: newId, left: left, top: top };
        const newList = [...furnitureInRoomBoard, newItem];
        setFurnitureInRoomBoard(newList);
    };

    const removeFromRoomBoard = (id: string) => {
        const newItems = furnitureInRoomBoard.filter((f) => f.id !== id);
        setFurnitureInRoomBoard(newItems);
    };

    const clearRoomBoard = () => {
        setFurnitureInRoomBoard([]);
    };

    const moveFurniture = useCallback(
        (id, left, top) => {
            const newItems = furnitureInRoomBoard.map((item) => {
                return item.id === id
                    ? { ...item, top: top, left: left }
                    : item;
            });
            setFurnitureInRoomBoard(newItems);
        },
        [furnitureInRoomBoard]
    );

    const createNewRoom = () => {
        const newSavedRoom: SavedRoom = {
            id: savedRooms.length + 1,
            furniture: [...furnitureInRoomBoard]
        };
        const newSavedRooms = [...savedRooms, newSavedRoom];
        setSavedRooms(newSavedRooms);
        setFurnitureInRoomBoard([]);
    };

    const switchToRoom = (id: number) => {
        const newRoom = savedRooms[id - 1];
        setFurnitureInRoomBoard(newRoom.furniture);
    };

    React.useEffect(() => {
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
                            <Button
                                style={{ backgroundColor: "#323f6c" }}
                                onClick={() => clearRoomBoard()}
                            >
                                Clear Room
                            </Button>
                        </Row>
                        {/* <Row>
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
                        </Row> */}
                        <FurnitureList />
                    </Container>
                </div>
                <div id="top-menu-container">
                    <Container>
                        <Row>
                            <Col>
                                <Button
                                    style={{
                                        backgroundColor: "#323f6c",
                                        borderRadius: 0
                                    }}
                                    onClick={() => createNewRoom()}
                                >
                                    Create New Room
                                </Button>
                            </Col>
                            <Col>
                                <div id="room-selection-container">
                                    {savedRooms.map((room) => (
                                        <Button
                                            className="room-selection-button"
                                            key={`room${room.id}`}
                                            onClick={() =>
                                                switchToRoom(room.id)
                                            }
                                        >
                                            Room {room.id}
                                        </Button>
                                    ))}
                                </div>
                            </Col>
                            {/* <Col>
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
                                        src={require("./images/viewRoomsButton.png")}
                                        width="120"
                                        height="40"
                                    />
                                </Button>
                            </Col> */}
                        </Row>
                    </Container>
                </div>
                <div id="main-board-container">
                    <RoomBoard
                        furnitureInRoomBoard={furnitureInRoomBoard}
                        moveFurniture={moveFurniture}
                        addToRoomBoard={addToRoomBoard}
                        removeFromRoomBoard={removeFromRoomBoard}
                    />
                </div>
            </div>
        </DndProvider>
    );
};

export default Layout;
