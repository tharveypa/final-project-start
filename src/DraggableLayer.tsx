/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Place } from "./Place";
import sample from "./Places.json";
import { PlacePic } from "./PlacePic";
import { ObjectPlaces } from "./ObjectPlaces";
//import { Containers } from "./Containers";
//RENDER ALL BUT IF PIC POSIION IS EQUAL TO THE VALUE OF LEFT AND TOP THEN UPDATE THE POSITION?
//Pic position will be used for reassignment when dropping the object and then rewrite that object in the array to the pic position
type BoardProps = {
    picPosition: [number, number];
};

const PLACES = sample.map((place): Place => ({ ...place }));

const renderPiece = (i: Place, objectPlaces: [number, number]) => {
    return <PlacePic objectPlace={i} picPosition={objectPlaces}></PlacePic>;
};

//const renderSquare = (i: Place, picPosition: [number, number]) => {};
export const DraggableLayer: React.FC<BoardProps> = (props) => {
    const PO = [{ id: "Eiffel Tower", x: 550, y: 20 }];
    const [PlacesObject, setArry] = useState<ObjectPlaces[]>(PO);
    const { picPosition } = props;
    const [placeArry, setArrry] = useState<Place[]>(PLACES);
    const renderPlaces = [];
    for (let i = 0; i < placeArry.length; i++) {
        renderPlaces.push(renderPiece(placeArry[i], picPosition));
    }
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexWrap: "wrap"
                    }}
                >
                    {renderPlaces}
                </div>
            </DndProvider>
        </div>
    );
};
