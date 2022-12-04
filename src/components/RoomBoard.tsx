/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useEffect } from "react";
import { useDrop, DragSourceMonitor, DragObjectWithType } from "react-dnd";
import FurnitureItem from "./FurnitureItem";
import type { Bed, Furniture } from "./types";

import "./styles.css";

interface RoomBoardProps {
    furnitureInRoomBoard: Furniture[];
    moveFurniture: (id: string, top: number, left: number) => void;
    addToRoomBoard: (item: Furniture, top: number, left: number) => void;
    removeFromRoomBoard: (id: string) => void;
}

const RoomBoard = ({
    furnitureInRoomBoard,
    moveFurniture,
    addToRoomBoard,
    removeFromRoomBoard
}: RoomBoardProps) => {
    const [, drop] = useDrop({
        accept: "Furniture",
        drop(item: unknown, monitor) {
            const i = item as Furniture;
            const delta = monitor.getDifferenceFromInitialOffset() as {
                x: number;
                y: number;
            };

            const left = Math.round(i.left + delta.x);
            const top = Math.round(i.top + delta.y);

            if (i.id.includes("menu")) {
                addToRoomBoard(i, left, top);
            } else {
                moveFurniture(i.id, left, top);
            }
            return null;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });

    return (
        <div id="room-board">
            <div ref={drop} id="room">
                {furnitureInRoomBoard.map((f: Furniture) => (
                    <FurnitureItem
                        removeFromRoomBoard={removeFromRoomBoard}
                        key={f.id}
                        item={f}
                    />
                ))}
            </div>
        </div>
    );
};

export default RoomBoard;