/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDrop, XYCoord } from "react-dnd";
import React, { useState } from "react";
import { DragTile } from "./Interfaces/DragTile";
import { Box } from "./components/Box";
import { ItemTypes } from "./constants";

export function CustomDragLayer(): JSX.Element {
    const dragt: DragTile = {
        type: "string",
        design: "string",
        pos: [40, 0],
        graphic: "string", //file name
        name: "Couch",
        size: [50, 20],
        id: 0,
        hasFurniture: false,
        hasPainting: false,
        placeOnWall: false,
        isFill: false
    };
    const [{ item, offset }, drop] = useDrop({
        accept: ItemTypes.DragTile,
        collect: (monitor) => ({
            item: monitor.getItem(),
            offset: monitor.getClientOffset()
        }),
        drop: () => {
            addDragTile({
                type: "string",
                design: "string",
                pos: [notnull(offset).x, notnull(offset).y],
                graphic: "string", //file name
                name: "string",
                size: [50, 75],
                id: 0,
                hasFurniture: false,
                hasPainting: false,
                placeOnWall: false,
                isFill: false
            });
        }
    });
    const [itemArray, setItemArray] = useState<DragTile[]>([dragt]);
    function addDragTile(dt: DragTile) {
        setItemArray([...itemArray, dt]);
    }
    function notnull(x: null | XYCoord) {
        return x === null ? { x: 0, y: 0 } : x;
    }
    return (
        <div
            ref={drop}
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#7E481C",
                position: "relative"
            }}
        >
            {/* This is the part that puts every note in the list of notes onto the corkboard*/}
            {itemArray.map((dt: DragTile) => {
                return (
                    <div
                        key={dt.id}
                        style={{
                            height: dt.size[1] + "px",
                            width: dt.size[0] + "px",
                            backgroundColor: "yellow",
                            position: "absolute",
                            top: dt.pos[1] + "%",
                            left: dt.pos[0] + "%",
                            zIndex: "1%"
                        }}
                    >
                        <Box name={dt.name} id={dt.id}></Box>
                    </div>
                );
            })}
        </div>
    );
}
