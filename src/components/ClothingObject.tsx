import React from "react";
import { useDrag } from "react-dnd";
import { Clothing } from "../interfaces/Clothing";
import itemTypes from "../interfaces/itemTypes";

import "./ClothingObject.css";

function ElementObject({ element }: { element: Clothing }): JSX.Element {
    const [, drag] = useDrag({
        item: {
            type: itemTypes.CLOTHING,
            ID: element.id
        },
        collect: (monitor: { isDragging: () => unknown }) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    if (element.shown != true) {
        return (
            <div>
                <img
                    id={element.id.toString()}
                    ref={drag}
                    src={element.image}
                    alt={"element"}
                />
            </div>
        );
    } else {
        return (
            <img
                id={element.id.toString()}
                ref={drag}
                src={element.image}
                alt={"element"}
                style={{
                    ...StyleSheet,
                    top: element.top,
                    left: element.left,
                    position: "absolute"
                }}
            />
        );
    }
}

export default ElementObject;
