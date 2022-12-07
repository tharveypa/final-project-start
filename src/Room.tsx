/* eslint-disable no-extra-parens */
import React from "react";
import { Button } from "react-bootstrap";
import { DropTargetMonitor, useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import Container from "./Container";
//import { canMovePic } from "./game";
import { Furniture } from "./Interfaces/furniture";
import { BoxMap } from "./Interfaces/BoxMap";
import update from "immutability-helper";

let ID_UPDATE = 1;

type RoomProps = {
    x: number;
    FurnitureInRoom: Furniture[];
    roomWidth: string;
    roomHeight: string;
    furnitures: BoxMap;
    setFurnitures: (newBoxes: BoxMap) => void;
};

const Room: React.FC<RoomProps> = (props) => {
    const {
        x,
        FurnitureInRoom,
        children,
        roomWidth,
        roomHeight,
        furnitures,
        setFurnitures
    } = props;

    const onDrop = (monitor: DropTargetMonitor) => {
        const newFurnitureBoxMap: Furniture = monitor.getItem().Furniture;
        //const existingFurnitureBoxMap = furnitures[newFurnitureBoxMap.name];
        //if (existingFurnitureBoxMap === undefined) {
        if (furnitures[newFurnitureBoxMap.name]) {
            newFurnitureBoxMap.id += 18 * ID_UPDATE; // from Ren
            ID_UPDATE++;
            newFurnitureBoxMap.name += "a";
        }
        setFurnitures(
            update(furnitures, {
                $merge: {
                    [newFurnitureBoxMap.name]: {
                        top: 0,
                        left: 0,
                        FurnitureItem: {
                            name: newFurnitureBoxMap.name,
                            id: newFurnitureBoxMap.id,
                            price: newFurnitureBoxMap.price,
                            image: newFurnitureBoxMap.image,
                            color: newFurnitureBoxMap.color
                        }
                    }
                }
            })
        );
    };

    const values = Object.values(furnitures);
    const cost = values.reduce(
        (
            currentTotal: number,
            value: { top: number; left: number; FurnitureItem: Furniture }
        ) => currentTotal + value.FurnitureItem.price,
        0
    );

    const [, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => x === FurnitureInRoom.length,
        drop: (item, monitor) => onDrop(monitor),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });
    console.log(furnitures);
    if (furnitures["Coffee Table"]) {
        console.log("hi");
    }
    return (
        <div>
            <div
                ref={drop}
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                <Container
                    furnitures={furnitures}
                    setFurnitures={setFurnitures}
                    roomHeight={roomHeight}
                    roomWidth={roomWidth}
                >
                    {children}
                </Container>
                <div>
                    <Button
                        onClick={() =>
                            setFurnitures(update(furnitures, { $set: {} }))
                        }
                    >
                        Clear Room
                    </Button>
                    <p>Cost: {cost}</p>
                </div>
            </div>
        </div>
    );
};

export default Room;
