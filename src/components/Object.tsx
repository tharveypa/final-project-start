/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Element } from "../interfaces/Element";
import itemTypes from "../interfaces/itemTypes";

import "./Object.css";

function Object({ element }: { element: Element }): JSX.Element {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: itemTypes.ELEMENT,
            ID: element.id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    return (
        <div>
            <img
                id={element.id.toString()}
                ref={drag}
                src={element.image}
                alt={"element"}
            />
        </div>
    );
}

export default Object;
