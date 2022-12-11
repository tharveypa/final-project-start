import React from "react";
import { useDrag } from "react-dnd";
import { Clothing } from "../interfaces/Clothing";
import itemTypes from "../interfaces/itemTypes";

import "./ClothingObject.css";

function ClothingObject({ clothing }: { clothing: Clothing }): JSX.Element {
    const [, drag] = useDrag({
        item: {
            type: itemTypes.CLOTHING,
            ID: clothing.id
        },
        collect: (monitor: { isDragging: () => unknown }) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    if (clothing.shown != true) {
        return (
            <div>
                <img
                    id={clothing.id.toString()}
                    ref={drag}
                    src={clothing.image}
                    alt={"clothing"}
                />
            </div>
        );
    } else {
        return (
            <img
                id={clothing.id.toString()}
                ref={drag}
                src={clothing.image}
                alt={"clothing"}
                style={{
                    ...StyleSheet,
                    position: "absolute",
                    height: clothing.height,
                    width: clothing.width
                }}
            />
        );
    }
}

export default ClothingObject;
