import React, { useState } from "react";
import { DragTile } from "../Interfaces/DragTile";
import { Button } from "react-bootstrap";

export function Tile(dt: DragTile): JSX.Element {
    const [tile, setTile] = useState<DragTile>(dt);
    function updateTile(newTile: DragTile): void {
        setTile({ ...newTile });
    }

    return (
        <div
            style={{
                backgroundColor: "white",
                border: "2 px solid black"
            }}
        >
            <span
                style={{
                    color: "#00ff00",
                    fontSize: 20
                }}
            >
                {tile.name}
            </span>
            <br></br>
            name: {tile.name} <br></br>
            type: {tile.type} <br></br>
            design: {tile.design} <br></br>
            <br></br>
            <Button
                onClick={() =>
                    updateTile({
                        name: "newName",
                        type: "newType",
                        design: "newDesign",
                        pos: tile.pos,
                        graphic: tile.graphic,
                        size: tile.size,
                        id: tile.id,
                        hasFurniture: false,
                        hasPainting: false,
                        placeOnWall: false,
                        isFill: false,
                        comments: []
                    })
                }
            >
                Make it new!
            </Button>
        </div>
    );
}
