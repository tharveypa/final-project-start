import React, { CSSProperties, Fragment } from "react";
import type { FC, ReactNode } from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import "../App.css";
import { ItemTypes } from "../constants";
import RedCar from "./images/redcar.png";
import WipeCar from "./images/towel.png";
// CSSProperties,
const style: CSSProperties = {
    position: "absolute",
    border: "1px dashed gray",
    padding: "0.5 rem 1rem",
    //opacity: isDragging ? 1 : 0.5,
    fontSize: 10,
    fontWeight: "bold",
    cursor: "move",
    textAlign: "center"
};

type ToolProps = {
    id: string;
    left: number;
    top: number;
    title: string;
    children?: ReactNode;
};

export const Tool: FC<ToolProps> = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, left, top, title, children } = props;
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.BACKS,
            id: id,
            top: top,
            left: left
        },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    return (
        <Fragment>
            <div
                ref={drag}
                style={{
                    position: "relative",
                    //border: "1px dashed gray",
                    padding: "0.5 rem 1rem",
                    //opacity: isDragging ? 1 : 0.5,
                    fontSize: 10,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center",
                    //background: "white",
                    width: "30px",
                    height: "30px",
                    left: left,
                    top: top
                }}
            >
                <img src={require("./images/" + title + ".png")} />
                {/* <p>{title}</p> */}
                {/* {children} */}
            </div>
        </Fragment>
    );
};
export default Tool;
