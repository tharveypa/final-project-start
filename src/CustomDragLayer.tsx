/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDragLayer, useDrop, XYCoord } from "react-dnd";
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
                pos: [
                    notnull(currentOffset).x -
                        800 +
                        (notnull(grabOffset).x - notnull(sourceOffset).x),
                    notnull(currentOffset).y -
                        50 +
                        (notnull(grabOffset).y - notnull(sourceOffset).y)
                ],
                graphic: "string", //file name
                name: "test",
                size: [50, 75],
                id: 1,
                hasFurniture: false,
                hasPainting: false,
                placeOnWall: false,
                isFill: false
            });
            //console.log("x: " + notnull(currentOffset).x);
            //console.log("x real: " + BoxArray[size - 1].pos[0]);
            //console.log("y: " + notnull(currentOffset).y);
            //console.log("y real: " + BoxArray[size - 1].pos[1]);
        }
    });
    const { currentOffset, grabOffset, sourceOffset } = useDragLayer(
        (monitor) => ({
            currentOffset: monitor.getSourceClientOffset(),
            grabOffset: monitor.getInitialClientOffset(),
            sourceOffset: monitor.getInitialSourceClientOffset()
        })
    );
    const [BoxArray, setBoxArray] = useState<DragTile[]>([dragt]);
    const [size, setSize] = useState<number>(BoxArray.length);
    function addDragTile(dt: DragTile) {
        setBoxArray([...BoxArray, { ...dt, id: size }]);
        setSize(size + 1);
    }
    function notnull(p: null | XYCoord) {
        return p === null ? { x: 0, y: 0 } : p;
    }
    return (
        <div
            ref={drop}
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#ff0000",
                position: "relative"
            }}
        >
            {BoxArray.map((dt: DragTile) => {
                return (
                    <div
                        key={dt.id}
                        style={{
                            height: dt.size[1] + "px",
                            width: dt.size[0] + "px",
                            backgroundColor: "yellow",
                            position: "absolute",
                            top: dt.pos[1] + "px",
                            left: dt.pos[0] + "px",
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
