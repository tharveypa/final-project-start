/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { DragTile } from "../Interfaces/DragTile";

type BoxProps = { name: string; dt: DragTile };

export function Box(bp: BoxProps): JSX.Element {
    const [{ offset }, drag] = useDrag({
        item: { type: ItemTypes.DragTile, data: bp.dt },
        collect: (monitor) => ({
            offset: monitor.getClientOffset()
        })
    });
    return (
        <div
            ref={drag}
            style={{
                height: "20%",
                width: "20%",
                backgroundColor: "yellow"
            }}
        >
            {bp.name}
        </div>
    );
}
