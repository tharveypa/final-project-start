/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { DragTile } from "../Interfaces/DragTile";

type BoxProps = { name: string; id: number };

export function Box(bp: BoxProps): JSX.Element {
    const [{ offset }, drag] = useDrag({
        //type is note; Type determines where it can be dropped
        item: { type: ItemTypes.DragTile, id: bp.id },
        collect: (monitor) => ({
            offset: monitor.getClientOffset()
        })
    });
    return (
        <div
            //makes the dragging of the note work
            ref={drag}
            //style controls how the note looks
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
