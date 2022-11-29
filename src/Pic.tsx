import React from "react";
import { useDrag } from "react-dnd";
import { tileItem } from "./interfaces";

type ObjectProp = {
    tile: tileItem;
    scale: number;
    updateSelectTile: (tile: tileItem) => void;
    //position: [number, number];
    //orientation: number;
    //size: number;
    //texture: string;
    //type: string;
};

const Pic: React.FC<ObjectProp> = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: props.tile.snap, tile: props.tile },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });

    const update = (event: React.MouseEvent) => {
        if (event.button === 1 && props.tile.id >= 0) {
            props.updateSelectTile(props.tile);
        }
    };

    return (
        <div
            ref={drag}
            onMouseDown={update}
            style={{
                opacity: isDragging ? 1 : 0.5,
                fontSize: 10,
                fontWeight: "bold",
                cursor: "move",
                textAlign: "center"
            }}
        >
            {props.tile.color}
            <img
                src={require("" + props.tile.src)}
                width={props.scale + "%"}
                height={props.scale + "%"}
            />
        </div>
    );
};

export default Pic;
