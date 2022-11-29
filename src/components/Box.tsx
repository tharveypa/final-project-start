import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { DragTile } from "../Interfaces/DragTile";

type BoxProps = { name: string; id: number };

export function Box(bp: BoxProps): JSX.Element {
    const [, drag] = useDrag({
        //type is note; Type determines where it can be dropped
        item: { type: ItemTypes.DragTile, id: bp.id }
    });
    return (
        <div
            //makes the dragging of the note work
            ref={drag}
            //style controls how the note looks
            style={{
                height: "100%",
                width: "100%",
                backgroundColor: "yellow"
            }}
        >
            {bp.name}
        </div>
    );
}
