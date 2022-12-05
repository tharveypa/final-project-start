/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import update from "immutability-helper";
import React, { CSSProperties, Fragment, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canMovePlace, movePic } from "./game";
import { Place } from "./Place";
import { ObjectPlaces } from "./ObjectPlaces";

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
    /*
    const x = picPosition[0];
    const y = picPosition[1];
    */
    console.log(picPosition);
    //const picPosition = [objectPlace.left, objectPlace.top];
    console.log(objectPlace.Name, ",", objectPlace.top, ",", objectPlace.left);
    //console.log(objectPlace.Name, ",", objectPlace.top, ",", objectPlace.left);
    function dropper(obj: Place) {
        console.log("entered");
        return true;
    }
    function mover(monitor: any, object: Place, left: number, top: number) {
        object.left += 1;
        return true;
    }

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => dropper(objectPlace),
        drop: (monitor) =>
            mover(monitor, objectPlace, objectPlace.top, objectPlace.left),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    //objectPlace.top = picPosition[0];
    console.log(objectPlace.Name, ",", objectPlace.top, ",", objectPlace.left);
    console.log(objectPlace.Name, ",", canDrop);
    return (
        <Fragment>
            <div
                ref={drop}
                style={{
                    ...style,
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
//                    opacity: isDragging ? 1 : 0.5,
