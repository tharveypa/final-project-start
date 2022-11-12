import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Place } from "./Place";
import sample from "./Places.json";
import { PlacePic } from "./PlacePic";
//import { Containers } from "./Containers";

const PLACES = sample.map((place): Place => ({ ...place }));

const renderPiece = (i: Place) => {
    return <PlacePic objectPlace={i}></PlacePic>;
};

//const renderSquare = (i: Place, picPosition: [number, number]) => {};
export const DraggableLayer = () => {
    const [placeArry] = useState<Place[]>(PLACES);
    const renderPlaces = [];
    for (let i = 0; i < placeArry.length; i++) {
        renderPlaces.push(renderPiece(placeArry[i]));
    }
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "center",
                        flexWrap: "wrap"
                    }}
                >
                    {renderPlaces}
                </div>
            </DndProvider>
        </div>
    );
};
