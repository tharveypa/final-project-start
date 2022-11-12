import React from "react";
//import type { CSSProperties } from "react";
import { useDrop } from "react-dnd";
import { Place } from "./Place";
import { PlacePic } from "./PlacePic";
import { canMovePic, movePic } from "./game";
import { ItemTypes } from "./constants";

type PlacePicProps = {
    objectPlace: Place;
};

export const Containers: React.FC<PlacePicProps> = (props) => {
    const { objectPlace } = props;
    const [, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(objectPlace.top, objectPlace.left),
        drop: () => movePic(objectPlace.top, objectPlace.left),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });
    return (
        <div ref={drop}>
            <PlacePic objectPlace={objectPlace}></PlacePic>
        </div>
    );
};
