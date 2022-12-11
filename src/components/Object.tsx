/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Clothing } from "../interfaces/Clothing";
import itemTypes from "../interfaces/itemTypes";

import "./Object.css";

function Object({ element }: { element: Clothing }): JSX.Element {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: itemTypes.CLOTHING,
            ID: element.id
        },
        collect: (monitor: any) => ({
            isDragging: !!monitor.isDragging()
        })
    });

    if (element.shown == false) {
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
    } else {
        return (
            <div>
                <img
                    id={element.id.toString()}
                    src={element.image}
                    alt={"element"}
                />
            </div>
        );
    }
}

export default Object;
