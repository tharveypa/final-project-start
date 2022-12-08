import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../interfaces/itemTypes";

import "./Trashbin.css";
import "../App.css";
import { CardContext } from "./ElementList";

export interface ContainerProps {
    children: React.ReactNode;
}

interface ITEM {
    type: string;
    ID: number;
}
function Trashbin(props: ContainerProps) {
    const { children } = props;
    const { removefromScreen } = useContext(CardContext);
    const [, drop] = useDrop({
        accept: itemTypes.ELEMENT,
        drop: (item: ITEM) => removefromScreen(item.ID),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });
    return (
        <div className="container-right" ref={drop}>
            {children}
        </div>
    );
}

export default Trashbin;
