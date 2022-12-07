/* eslint-disable no-extra-parens */
import React, { CSSProperties, useCallback } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import { ItemTypes } from "./constants";
import { DragItem } from "./Interfaces/DragItem";
import { Furniture } from "./Interfaces/furniture";
import { BoxMap } from "./Interfaces/BoxMap";
import DraggableBox from "./DraggableBox";
import FloorPic from "./furnitures/room_floor_1.png";

type ContainerProps = {
    furnitures: BoxMap;
    setFurnitures: (newFurnitures: BoxMap) => void;
    roomWidth: string;
    roomHeight: string;
};
function styles(roomWidth: string, roomHeight: string): CSSProperties {
    return {
        width: roomWidth + "px",
        height: roomHeight + "px",
        position: "relative"
    };
}

const Container: React.FC<ContainerProps> = ({
    furnitures,
    setFurnitures,
    roomHeight,
    roomWidth
}) => {
    const moveBox = useCallback(
        (id: number, left: number, top: number) => {
            const FurnitureItem = furnitures[id].FurnitureItem;
            setFurnitures(
                update(furnitures, {
                    [FurnitureItem.name]: {
                        $merge: {
                            top: top,
                            left: left,
                            FurnitureItem: FurnitureItem
                        }
                    }
                })
            );
        },
        [furnitures]
    );
    const [, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item: DragItem, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number;
                y: number;
            };
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveBox(item.id, left, top);
            return undefined;
        }
    });
    return (
        <div ref={drop} style={styles(roomWidth, roomHeight)}>
            {Object.keys(furnitures).map((key) => (
                <DraggableBox
                    key={key}
                    id={key}
                    {...(furnitures[key] as {
                        top: number;
                        left: number;
                        FurnitureItem: Furniture;
                    })}
                    roomWidth={roomWidth}
                    roomHeight={roomHeight}
                />
            ))}
            <img
                src={FloorPic}
                width={roomWidth + "px"}
                height={roomHeight + "px"}
            />
        </div>
    );
};

export default Container;
