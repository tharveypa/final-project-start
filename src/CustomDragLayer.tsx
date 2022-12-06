/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDragLayer, useDrop, XYCoord } from "react-dnd";
import React, { useState } from "react";
import { DragTile } from "./Interfaces/DragTile";
import { Box } from "./components/Box";
import { ItemTypes } from "./constants";

type layerProps = { scale: number };

export function CustomDragLayer(props: layerProps): JSX.Element {
    const dragt: DragTile = {
        type: "string",
        design: "string",
        pos: [40, 0],
        graphic: "string",
        name: "Couch",
        size: [50, 20],
        id: 1,
        hasFurniture: false,
        hasPainting: false,
        placeOnWall: false,
        isFill: false,
        comments: []
    };
    const [{ item, offset }, drop] = useDrop({
        accept: ItemTypes.DragTile,
        collect: (monitor) => ({
            item: monitor.getItem(),
            offset: monitor.getClientOffset()
        }),
        drop: () => {
            console.log(item.data);
            addDragTile({
                type: item.data.type,
                design: item.data.design,
                pos: [
                    notnull(currentOffset).x -
                        800 +
                        (notnull(grabOffset).x - notnull(sourceOffset).x),
                    notnull(currentOffset).y -
                        50 +
                        (notnull(grabOffset).y - notnull(sourceOffset).y)
                ],
                graphic: item.data.graphic,
                name: item.data.name,
                size: [item.data.size[0], item.data.size[1]],
                id: item.data.id,
                hasFurniture: item.data.hasFurniture,
                hasPainting: item.data.hasPainting,
                placeOnWall: item.data.placeOnWall,
                isFill: item.data.isFill,
                comments: item.data.comments
            });
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
    const [size, setSize] = useState<number>(2);
    function addDragTile(dt: DragTile) {
        if (dt.id === -1) {
            setBoxArray([...BoxArray, { ...dt, id: size }]);
            setSize(size + 1);
            return;
        }
        BoxArray.map((dtile: DragTile) => {
            if (dt.id === dtile.id) {
                dtile.pos = dt.pos;
            }
        });
        setBoxArray([...BoxArray]);
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
                            height: dt.size[1] / props.scale + "px",
                            width: dt.size[0] / props.scale + "px",
                            backgroundColor: "yellow",
                            position: "absolute",
                            top: dt.pos[1] / props.scale + "px",
                            left: dt.pos[0] / props.scale + "px",
                            zIndex: "1%"
                        }}
                    >
                        <Box name={dt.name} dt={dt}></Box>
                    </div>
                );
            })}
        </div>
    );
}
