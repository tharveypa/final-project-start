/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useEffect, useState, ReactDOM } from "react";
import { useDrag } from "react-dnd";

import type { Furniture } from "./types";

interface FurnitureItemProps {
    item: Furniture;
}

const FurnitureItem = ({ item }: FurnitureItemProps) => {
    const { id, name, left, top, height, width } = item;
    const [position, setPosition] = useState({ top: top, left: left });

    const positionRef = useRef(null);

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
            width
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    const styles: Record<string, unknown> = {
        position: id.includes("menu") ? "static" : "absolute",
        left,
        top,
        height,
        width,
        "background-color": isDragging ? "blue" : "red",
        margin: 0
    };

    useEffect(() => {
        console.log(positionRef.current);
    }, [positionRef]);

    return (
        <div id={item.id} style={styles} ref={drag}>
            <div
                style={{ width: "100%", height: "100%" }}
                ref={(positionRef) => {
                    if (!positionRef) return;
                }}
            >
                <p style={{ margin: 0 }}>
                    {name}, {id}
                </p>
            </div>
        </div>
    );
};

export default FurnitureItem;
