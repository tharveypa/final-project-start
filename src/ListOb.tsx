import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import Pic from "./Pic";

const ListOb = () => {
    return <Pic color={"red"} id={-1}></Pic>;
};

export default ListOb;
