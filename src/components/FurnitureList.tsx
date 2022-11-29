/* eslint-disable no-extra-parens */
import React from "react";

import FurnitureItem from "./FurnitureItem";

import type { Furniture } from "./types";

import { furniture } from "./data";

import "./styles.css";

const FurnitureList = () => {
    return (
        <div id="furniture-list">
            <p>Room Furniture</p>
            {furniture.map((f: Furniture) => (
                <FurnitureItem key={f.name} item={f} />
            ))}
        </div>
    );
};

export default FurnitureList;
