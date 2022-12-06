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
        graphic: "string", //file name
        name: "string",
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
        graphic: "string", //file name
        name: "string",
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
        <div id="dndarr">
            {dragarr.map((tile: DragTile) => {
                return (
                    <Box key={"" + tile.id} name={tile.name} dt={tile}></Box>
                );
            })}
        </div>
    );
}
