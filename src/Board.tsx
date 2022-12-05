/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import { FURNITURE_LIST } from "./data/FurnitureList";
import Room from "./Room";
import { Furniture } from "./Interfaces/furniture";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BoxMap } from "./Interfaces/BoxMap";
import { RoomStatus } from "./Interfaces/RoomStatus";
import update from "immutability-helper";

const renderPiece = (x: number, FurnitureItem: Furniture) => {
    return (
        <div>
            <Pic FurnitureItem={FurnitureItem} />
        </div>
    );
};

const renderSquare = (
    i: number,
    picPosition: [number, number],
    FurnitureInRoom: Furniture[]
) => {
    const x = i;

    return (
        <div key={i} style={{ width: "50%", height: "50%" }}>
            <BoardSquare x={x} FurnitureInRoom={FurnitureInRoom}>
                {i < FurnitureInRoom.length
                    ? renderPiece(x, FurnitureInRoom[i])
                    : null}
            </BoardSquare>
        </div>
    );
};

const renderRoom = (
    i: number,
    picPosition: [number, number],
    FurnitureInRoom: Furniture[],
    roomWidth: string,
    roomHeight: string,
    furnitures: BoxMap,
    setFurnitures: (newBoxes: BoxMap) => void
) => {
    const x = i;
    return (
        <div key={i} style={{ width: "50%", height: "50%" }}>
            <Room
                x={x}
                roomWidth={roomWidth}
                roomHeight={roomHeight}
                FurnitureInRoom={FurnitureInRoom}
                furnitures={furnitures}
                setFurnitures={setFurnitures}
            />
        </div>
    );
};

const renderFurnitureList = (
    setFurnitureList: (newFurnitureList: Furniture[]) => void,
    FurnitureList: Furniture[]
) => {
    return (
        <div
            id="Furniture-list-buttons"
            style={{
                marginRight: "20px",
                marginLeft: "20px",
                marginTop: "20px"
            }}
        >
            <Button
                onClick={() => setFurnitureList(FURNITURE_LIST)}
                style={{
                    backgroundColor:
                        FurnitureList === FURNITURE_LIST ? "blue" : undefined
                }}
            >
                Furniture List
            </Button>
        </div>
    );
};

type BoardProps = {
    picPosition: [number, number];
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    const defaultRoomStatus = {
        name: "Room1",
        FurnitureInRoom: FURNITURE_LIST,
        furnitures: {},
        roomWidth: "500",
        roomHeight: "500"
    };
    const squares = [];
    const room = [];
    const [FurnitureInRoom, setFurnitureInRoom] = useState<Furniture[]>(
        defaultRoomStatus.FurnitureInRoom
    );
    const [furnitures, setFurnitures] = useState<BoxMap>(
        defaultRoomStatus.furnitures
    );
    const [roomWidth, setRoomWidth] = useState<string>(
        defaultRoomStatus.roomWidth
    );
    const [roomHeight, setRoomHeight] = useState<string>(
        defaultRoomStatus.roomHeight
    );
    /**Determines the number of drag-and-drop squares to make */
    for (let i = 0; i < FurnitureInRoom.length; i++) {
        squares.push(renderSquare(i, picPosition, FurnitureInRoom));
    }
    room.push(
        renderRoom(
            FurnitureInRoom.length,
            picPosition,
            FurnitureInRoom,
            roomWidth,
            roomHeight,
            furnitures,
            setFurnitures
        )
    );
    const FurnitureList = renderFurnitureList(
        setFurnitureInRoom,
        FurnitureInRoom
    );
    function updateRoomWidth(event: React.ChangeEvent<HTMLInputElement>) {
        setRoomWidth(event.target.value);
    }
    function updateRoomHeight(event: React.ChangeEvent<HTMLInputElement>) {
        setRoomHeight(event.target.value);
    }

    const [savedRooms, setSavedRooms] = useState<RoomStatus>({
        Room1: defaultRoomStatus
    });
    const [currentRoom, setCurrentRoom] = useState<{
        name: string;
        FurnitureInRoom: Furniture[];
        furnitures: BoxMap;
        roomWidth: string;
        roomHeight: string;
    }>(savedRooms["Room1"]);

    function updateRoom(params: {
        name: string;
        FurnitureInRoom: Furniture[];
        furnitures: BoxMap;
        roomWidth: string;
        roomHeight: string;
    }) {
        setSavedRooms(
            update(savedRooms, {
                [params.name]: {
                    $merge: {
                        name: params.name,
                        FurnitureInRoom: params.FurnitureInRoom,
                        furnitures: params.furnitures,
                        roomWidth: params.roomWidth,
                        roomHeight: params.roomHeight
                    }
                }
            })
        );
    }

    function updateCurrentRoom(key: string) {
        setCurrentRoom(savedRooms[key]);
        setFurnitureInRoom(savedRooms[key].FurnitureInRoom);
        setFurnitures(savedRooms[key].furnitures);
        setRoomWidth(savedRooms[key].roomWidth);
        setRoomHeight(savedRooms[key].roomHeight);
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <div>
                    {Object.keys(savedRooms).map((key) => (
                        <Button
                            key={key}
                            onClick={() => {
                                updateCurrentRoom(key);
                                updateRoom({
                                    name: currentRoom.name,
                                    FurnitureInRoom: FurnitureInRoom,
                                    furnitures: furnitures,
                                    roomWidth: roomWidth,
                                    roomHeight: roomHeight
                                });
                            }}
                            style={{
                                backgroundColor:
                                    key === currentRoom.name
                                        ? "orange"
                                        : undefined
                            }}
                        >
                            {key}
                        </Button>
                    ))}
                </div>
                <Container>
                    <Row>
                        <Col>
                            {FurnitureList}
                            <div
                                id="List"
                                style={{
                                    width: "300px",
                                    height: "650px",
                                    marginRight: "20px",
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    float: "left",
                                    backgroundColor: "white"
                                }}
                            >
                                <div
                                    style={{
                                        width: "250px",
                                        height: "250px",
                                        display: "flex",
                                        flexWrap: "wrap"
                                    }}
                                >
                                    {squares}
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div style={{ display: "inline-block" }}>
                                <Form.Group controlId="formRoomDimensions"></Form.Group>
                                <Form.Label
                                    style={{
                                        float: "left",
                                        marginLeft: "20px",
                                        marginTop: "20px"
                                    }}
                                >
                                    Room width:{" "}
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    value={roomWidth}
                                    onChange={updateRoomWidth}
                                    style={{
                                        width: 100,
                                        float: "left",
                                        marginLeft: "20px",
                                        marginTop: "20px"
                                    }}
                                />
                                <Form.Label
                                    style={{
                                        float: "left",
                                        marginLeft: "20px",
                                        marginTop: "20px"
                                    }}
                                >
                                    Room height:{" "}
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    value={roomHeight}
                                    onChange={updateRoomHeight}
                                    style={{
                                        width: 100,
                                        float: "left",
                                        marginLeft: "20px",
                                        marginTop: "20px"
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    width: roomWidth + "px",
                                    height: roomHeight + "px",
                                    flexWrap: "wrap",
                                    marginRight: "20px",
                                    marginLeft: "20px",
                                    marginTop: "20px",
                                    float: "left"
                                }}
                            >
                                {room}
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "194",
                                    height: "259"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </DndProvider>
    );
};

export default Board;
