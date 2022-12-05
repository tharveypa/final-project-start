import React, { CSSProperties, FC } from "react";
import { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";
import { Furniture } from "./Interfaces/furniture";
import Dropdown from "react-bootstrap/Dropdown";
import "./App.css";

function styles(top: number, left: number, isDragging: boolean): CSSProperties {
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
        position: "absolute",
        transform,
        WebkitTransform: transform,
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : ""
    };
}

export interface RoomProps {
    id: string;
    left: number;
    top: number;
    FurnitureItem: Furniture;
    roomWidth: string;
    roomHeight: string;
}

export const DraggableBox: FC<RoomProps> = ({
    id,
    left,
    top,
    FurnitureItem,
    roomWidth,
    roomHeight
}) => {
    const picWidth: number = 80 * (1 + (parseInt(roomWidth) - 400) / 400);
    const picHeight: number = 80 * (1 + (parseInt(roomHeight) - 400) / 400);
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.BOX,
            id: id,
            left: left,
            top: top,
            FurnitureItem: FurnitureItem
        },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging()
        })
    });
    return (
        <div ref={drag} style={styles(top, left, isDragging)} role="PIC">
            <div
                style={{
                    fontSize: 50,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
                role="PIC"
            >
                <Dropdown>
                    <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                    ></Dropdown.Toggle>
                    <img
                        src={FurnitureItem.image}
                        width={picWidth}
                        height={picHeight}
                    />
                </Dropdown>
            </div>
        </div>
    );
};

export default DraggableBox;
