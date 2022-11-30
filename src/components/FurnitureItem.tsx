/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, ReactDOM } from "react";
import { useDrag } from "react-dnd";

import type { Furniture } from "./types";

interface FurnitureItemProps {
    item: Furniture;
    removeFromRoomBoard?: (id: string) => void;
}

const FurnitureItem = ({ item, removeFromRoomBoard }: FurnitureItemProps) => {
    const { id, name, left, top, height, width, color } = item;
    const [position, setPosition] = useState({ top: top, left: left });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const elem = document.getElementById(item.id)?.getBoundingClientRect();
        const t = elem ? elem.y : 0;
        const l = elem ? elem.x : 0;
        setPosition({ top: t, left: l });
    }, []);

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: "Furniture",
            id,
            name,
            left: id.includes("menu") ? position.left : left,
            top: id.includes("menu") ? position.top : top,
            height,
            width,
            color
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const styles: Record<string, unknown> = {
        position: id.includes("menu") ? "static" : "absolute",
        left,
        top,
        height: id.includes("menu") ? height / 2 : height,
        width: id.includes("menu") ? width / 2 : width,
        backgroundColor: color,
        margin: 0
    };

    const showDimensionsAndIcon = isHovered && !id.includes("menu");

    return (
        <div
            id={item.id}
            style={styles}
            ref={drag}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ width: "100%", height: "100%" }}>
                {showDimensionsAndIcon && (
                    <>
                        <p className="dimensions-label">
                            H: {height / 3} inches
                        </p>
                        <p className="dimensions-label">
                            W: {width / 3} inches
                        </p>
                    </>
                )}
                {showDimensionsAndIcon && (
                    <p
                        id="remove-button"
                        onClick={() =>
                            removeFromRoomBoard && removeFromRoomBoard(id)
                        }
                    >
                        Remove
                    </p>
                )}
            </div>
        </div>
    );
};

export default FurnitureItem;
