/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Pic from "../Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragTile } from "../Interfaces/DragTile";
import BoardSquare from "../BoardSquare";
import { Box } from "./Box";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DndArray(): JSX.Element {
    const test: DragTile = {
        type: "string",
        design: "string",
        pos: [0, 0],
        graphic: "./red_couch.png", //file name
        name: "Couch",
        size: [0, 0],
        id: -1,
        hasFurniture: false,
        hasPainting: false,
        placeOnWall: false,
        isFill: false,
        comments: ["hi"]
    };
    const test2: DragTile = {
        type: "string",
        design: "string",
        pos: [0, 0],
        graphic: "./door.jpg", //file name
        name: "Door",
        size: [40, 40],
        id: -1,
        hasFurniture: false,
        hasPainting: false,
        placeOnWall: false,
        isFill: false,
        comments: ["hi"]
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [dragarr, setarr] = useState<DragTile[]>([test, test2]); //, test2]);
    //we will likely have this be in a higher component that will pass down the filled array
    return (
        <div
            id="dndarr"
            style={{
                display: "inline-block",
                border: "1px solid black"
            }}
        >
            {dragarr.map((tile: DragTile) => {
                return (
                    <div
                        key={tile.id * 3}
                        style={{
                            display: "inline-block",
                            border: "1px solid black"
                        }}
                    >
                        <h3>{tile.name}</h3>
                        <Box
                            key={"" + tile.id}
                            name={tile.name}
                            dt={tile}
                        ></Box>
                    </div>
                );
            })}
        </div>
    );
}
