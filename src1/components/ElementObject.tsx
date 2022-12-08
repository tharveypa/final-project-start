import React from "react";
import { useDrag } from "react-dnd";
import { Element } from "../interfaces/Element";
import itemTypes from "../interfaces/itemTypes";

import "./ElementObject.css";

function ElementObject({ element }: { element: Element }): JSX.Element {
    const [, drag] = useDrag({
        item: {
            type: itemTypes.ELEMENT,
            ID: element.id
        },
        collect: (monitor) => ({
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
