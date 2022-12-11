import React, { useContext } from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../interfaces/itemTypes";

import "./Container.css";
import "../App.css";
import { CardContext } from "./ClothingList";

export interface ContainerProps {
    children: React.ReactNode;
}

interface ITEM {
    type: string;
    ID: number;
}
function Container(props: ContainerProps) {
    const { children } = props;
    const { markAsDone } = useContext(CardContext);
    const [, drop] = useDrop({
        accept: itemTypes.CLOTHING,
        drop: (item: ITEM) => markAsDone(item.ID),
        collect: (monitor: { isOver: () => unknown }) => ({
            isOver: !!monitor.isOver()
        })
    });
    return (
        <div className="temp" ref={drop}>
            {children}
        </div>
    );
}

export default Container;
