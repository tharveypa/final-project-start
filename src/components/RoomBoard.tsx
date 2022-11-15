/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrop } from "react-dnd";

import "./styles.css";

interface RoomBoardProps {
    children: React.ReactNode;
}

const RoomBoard = ({ children }: RoomBoardProps) => {
    const [items, setItems] = useState([]);
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: "Furniture",
        drop: () => ({ name: "Some name" }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });

    return (
        <div ref={drop} id="room-board">
            {items.map((item) => (
                <div key={item}>something</div>
            ))}
        </div>
    );
};

export default RoomBoard;
