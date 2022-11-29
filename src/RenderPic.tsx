/*import React, { useState } from "react";
import type { CSSProperties, FC } from "react";
import { useDrop, XYCoord } from "react-dnd";
import Pic from "./Pic";
import { ItemTypes } from "./constants";
import { Button } from "react-bootstrap";
import { Piece } from "./interfaces/piece";*/

//const div = document.querySelector("div");
const dustbinTop = document.getElementById("dustbin")?.offsetTop || 0;
console.log(dustbinTop);

export function createPieces(top: number, left: number): Piece[] {
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
