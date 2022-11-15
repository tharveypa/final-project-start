import React from "react";
import { useDrag } from "react-dnd";

import type { Furniture } from "./types";

interface FurnitureItemProps {
    item: Furniture;
}

const FurnitureItem = ({ item }: FurnitureItemProps) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: "Furniture" },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });

    return (
        <div ref={drag}>
            <p>{item.name}</p>
        </div>
    );
};

export default FurnitureItem;
