/*import React, { useState } from "react";
import type { CSSProperties, FC } from "react";
import { useDrop, XYCoord } from "react-dnd";
import Pic from "./Pic";
import { ItemTypes } from "./constants";
import { Button } from "react-bootstrap";*/

import { Piece } from "./interfaces/piece";

//const div = document.querySelector("div");
const dustbinTop = document.getElementById("dustbin")?.offsetTop || 0; //X
const dustbinLeft = document.getElementById("dustbin")?.offsetLeft || 0; //Y
console.log(dustbinTop);

//by order of operations, this code should work now, if it doesn't we can just hardcode the values

export function createPieces(top: number, left: number): Piece[] {
    top = dustbinTop;
    left = dustbinLeft;
    //import all photos, add pieces in at top and left
    const pieces: Piece[] = [];
    return pieces;
}

//we need to set these pieces to be the pieces in the piece bank

const pieces: Piece[] = [
    {
        id: "F",
        angle: 0,
        width: 100,
        height: 100,
        top: 150,
        left: 100,
        onBoard: false,
        reflected: false,
        image: "./Assets/Images/" + "F" + ".png"
    },
    {
        id: "I",
        angle: 0,
        width: 100,
        height: 100,
        top: 150,
        left: 100,
        onBoard: false,
        reflected: false,
        image: "./Assets/Images/" + "I" + ".png"
    },
    {
        id: "L",
        angle: 0,
        width: 100,
        height: 100,
        top: 150,
        left: 100,
        onBoard: false,
        reflected: false,
        image: "./Assets/Images/" + "L" + ".png"
    }
];
