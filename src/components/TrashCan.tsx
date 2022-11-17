import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
//import { noteData } from "../interfaces/noteData";
import { CardList } from "../components/CardList";

export function TrashCan(): JSX.Element {
    function trashDrop() {
        return 1;
    }
    return (
        <div>
            <img src="Trash.png"></img>
        </div>
    );
}
