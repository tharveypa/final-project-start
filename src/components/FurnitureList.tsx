/* eslint-disable no-extra-parens */
import React from "react";

import FurnitureItem from "./FurnitureItem";

import type { Furniture } from "./types";

import { furniture } from "./data";

import "./styles.css";

const FurnitureList = () => {
    return (
        <div id="furniture-list">
            {furniture.map((f: Furniture) => (
                <div key={f.name}>
                    <p className="furniture-label">
                        {f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                    </p>
                    <FurnitureItem item={f} />
                </div>
            ))}
        </div>
    );
};

export default FurnitureList;
