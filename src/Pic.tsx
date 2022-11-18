import React, { Fragment } from "react";
import { useDrag } from "react-dnd";
import { tileItem } from "./interfaces";

type ObjectProp = {
    tile: tileItem;
    scale: number;
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

    return (
        <Fragment>
            <div
                ref={drag}
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
        </Fragment>
    );
};

export default Pic;
