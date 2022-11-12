/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { CSSProperties, Fragment } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canMovePic, movePic } from "./game";
import { Place } from "./Place";
//change position to ABSOLUTE to then set the specific values of left and top WITHIN CSS PROPERTIES STYLE
//////////////////////////////////////////////////////////////////////////////////
//                    top: objectPlace.top,
//                    left: objectPlace.left
//// add these two in div style for image when change to absolute

const style: CSSProperties = {
    position: "relative",
    border: "2px dashed black",
    cursor: "move"
};

type PlacePicProps = {
    objectPlace: Place;
};

export const PlacePic: React.FC<PlacePicProps> = (props) => {
    const { objectPlace } = props;
    console.log(objectPlace.Name, ",", objectPlace.top, ",", objectPlace.left);
    const [, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(objectPlace.top, objectPlace.left),
        drop: () => movePic(objectPlace.top, objectPlace.left),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIC },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });
    return (
        <Fragment>
            <div
                ref={drop}
                style={{
                    ...style,
                    opacity: isDragging ? 1 : 0.5,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
            >
                <img src={objectPlace.Image} width="60" height="60" />
            </div>
        </Fragment>
    );
};
