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
    position: "absolute",
    border: "2px dashed black",
    cursor: "move"
};

type PlacePicProps = {
    objectPlace: Place;
    picPosition: [number, number];
};

export const PlacePic: React.FC<PlacePicProps> = (props) => {
    const { objectPlace, picPosition } = props;
    const x = picPosition[0];
    const y = picPosition[1];
    //const picPosition = [objectPlace.left, objectPlace.top];
    console.log(objectPlace.Name, ",", objectPlace.top, ",", objectPlace.left);
    console.log(objectPlace.Name, ",", objectPlace.top, ",", objectPlace.left);
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(x, y),
        drop: () => movePic(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PLACE },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });
    objectPlace.left = x * 2;
    objectPlace.top = y * 200;

    return (
        <Fragment>
            <div
                ref={drop}
                style={{
                    ...style,
                    opacity: isDragging ? 1 : 0.5,
                    fontWeight: "bold",
                    cursor: "move",
                    top: objectPlace.top,
                    left: objectPlace.left
                }}
            >
                <img src={objectPlace.Image} width="60" height="60" />
            </div>
        </Fragment>
    );
};
