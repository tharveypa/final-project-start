import React from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { ItemTypes } from "../constants";
import Pimp from "./Clean";
import PimpVsDestroy from "./PimpVsDestroy";

type CarSquareProps = {
    pic: string;
    description: string;
    top: number;
    left: number;
    title: string;
};

const CarSquare: React.FC<CarSquareProps> = (props) => {
    const { pic, left, top, title, description } = props;
    //let drag, isDragging;
    if (
        description === "BrownDirt" ||
        description === "BlackDirt" ||
        description === "TanDirt" ||
        description === "WhitePoop" ||
        description === "BrownPoop" ||
        description === "GreenPoop" ||
        description === "BreakWindows" ||
        description === "WipeCar"
    ) {
        const [{ isDragging }, drag] = useDrag({
            item: {
                type: ItemTypes.DROPS,
                pic: pic,
                top: top,
                left: left,
                title: title,
                description: description
            },
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: !!monitor.isDragging()
            })
        });
        return (
            <span className="getinlineplz">
                <span
                    ref={drag}
                    style={{
                        position: "relative",
                        padding: "0.5 rem 1rem",
                        opacity: isDragging ? 0.5 : 1,
                        fontSize: 10,
                        fontWeight: "bold",
                        cursor: "move",
                        textAlign: "center",
                        left: left,
                        top: top
                    }}
                >
                    {/* <header>{pic}</header> */}
                    <img
                        src={require("./images/" + pic + ".png")}
                        width="50"
                        height="50"
                    />
                </span>
                {pic}
            </span>
        );
    } else if (
        description === "City" ||
        description === "Forest" ||
        description === "Street" ||
        description === "Dump" ||
        description === "Mountain" ||
        description === "Alley" ||
        description === "Cave" ||
        description === "Garage"
    ) {
        const [{ isDragging }, drag] = useDrag({
            item: {
                type: ItemTypes.BACKS,
                pic: pic,
                top: top,
                left: left,
                title: title,
                description: description
            },
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: !!monitor.isDragging()
            })
        });
        return (
            <span className="getinlineplz">
                <span
                    ref={drag}
                    style={{
                        position: "relative",
                        padding: "0.5 rem 1rem",
                        opacity: isDragging ? 0.5 : 1,
                        fontSize: 10,
                        fontWeight: "bold",
                        cursor: "move",
                        textAlign: "center",
                        left: left,
                        top: top
                    }}
                >
                    {/* <header>{pic}</header> */}
                    <img
                        src={require("./images/" + pic + ".png")}
                        width="50"
                        height="50"
                    />
                </span>
                {pic}
            </span>
        );
    } else if (
        description === "Wing" ||
        description === "ShineCar" ||
        description === "LightTint" ||
        description === "MediumTint" ||
        description === "DarkTint"
    ) {
        const [{ isDragging }, drag] = useDrag({
            item: {
                type: ItemTypes.ONEPOS,
                pic: pic,
                top: top,
                left: left,
                title: title,
                description: description
            },
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: !!monitor.isDragging()
            })
        });
        return (
            <span className="getinlineplz">
                <span
                    ref={drag}
                    style={{
                        position: "relative",
                        padding: "0.5 rem 1rem",
                        opacity: isDragging ? 0.5 : 1,
                        fontSize: 10,
                        fontWeight: "bold",
                        cursor: "move",
                        textAlign: "center",
                        left: left,
                        top: top
                    }}
                >
                    {/* <header>{pic}</header> */}
                    <img
                        src={require("./images/" + pic + ".png")}
                        width="50"
                        height="50"
                    />
                </span>
                {pic}
            </span>
        );
    } else if (
        description === "Red" ||
        description === "Blue" ||
        description === "Green" ||
        description === "Yellow" ||
        description === "Purple" ||
        description === "Orange" ||
        description === "SlashTires" ||
        description === "BreakWindows" ||
        description === "FillTires" ||
        description === "RepairWindows"
    ) {
        const [{ isDragging }, drag] = useDrag({
            item: {
                type: ItemTypes.CARS,
                pic: pic,
                top: top,
                left: left,
                title: title,
                description: description
            },
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: !!monitor.isDragging()
            })
        });
        return (
            <span className="getinlineplz">
                <span
                    ref={drag}
                    style={{
                        position: "relative",
                        padding: "0.5 rem 1rem",
                        opacity: isDragging ? 0.5 : 1,
                        fontSize: 10,
                        fontWeight: "bold",
                        cursor: "move",
                        textAlign: "center",
                        left: left,
                        top: top
                    }}
                >
                    {/* <header>{pic}</header> */}
                    <img
                        src={require("./images/" + pic + ".png")}
                        width="50"
                        height="50"
                    />
                </span>
                {pic}
            </span>
        );
    }
    return <span className="getinlineplz"></span>;
};
export default CarSquare;
