/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import { Element } from "../interfaces/Element";

import "./Object.css";

function Object({ element }: { element: Element }): JSX.Element {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PROP, id: element },
        collect: (monitor: { isDragging: () => any }) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    const [descriptionVisible, setDescriptionVisible] =
        useState<boolean>(false);
    // function displayPlantDescription(): JSX.Element {
    //     return <PlantDescriber plant={plant}></PlantDescriber>;
    // }
    return (
        <div>
            <img
                id={element.id.toString()}
                ref={drag}
                src={element.image}
                alt={"dfa"}
                style={{ border: isDragging ? "10px solid black" : "0px" }}
                onClick={() => setDescriptionVisible(!descriptionVisible)}
            />
        </div>
    );
}

export default Object;
