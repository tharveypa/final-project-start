/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { DragTile } from "../Interfaces/DragTile";

type BoxProps = { name: string; dt: DragTile };

export function Box({ name, dt }: BoxProps): JSX.Element {
    const [{ offset }, drag] = useDrag({
        item: { type: ItemTypes.DragTile, data: dt },
        collect: (monitor) => ({
            offset: monitor.getClientOffset()
        })
    });
    return (
        <div
            ref={drag}
            style={{
                height: "60px",
                width: "60px",
                backgroundColor: "yellow",
                display: "inline-block"
            }}
        >
            {console.log(dt.graphic)}
            <img src={require(dt.graphic + "")} width="100%" height="100%" />
        </div>
    );
}
