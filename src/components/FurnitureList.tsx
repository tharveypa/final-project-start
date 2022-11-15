import React from "react";

import FurnitureItem from "./FurnitureItem";

import { furniture } from "./data";

const FurnitureList = () => {
    return (
        <div>
            <p>Room Furniture</p>
            {furniture.map((f) => (
                <FurnitureItem key={f.name} item={f} />
            ))}
        </div>
    );
};

export default FurnitureList;
