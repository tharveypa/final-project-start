/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    CSSProperties
} from "react";
import Pic from "../Pic";
import { DndProvider, DropTargetMonitor, useDrop, XYCoord } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "../BoardSquare";
import Dirt from "./images/dirt.png";
import update from "immutability-helper";
import { ItemTypes } from "../constants";
import type { ToolPos } from "./interfaces";
// import type { DropTargetMonitor, XYCoord } from "react-dnd";
// import { useDrop } from "react-dnd";
import Tool from "./Tool";
import { Button } from "react-bootstrap";
import Overlay from "../Overlay";
import { backgrounds, cars } from "./interfacing/ImageRenders";

import "./images/RedCar.png";
const styles: CSSProperties = {
    //width: "200px",
    //height: "300px",
    //border: "1px solid black",
    //position: "relative"
};
type CarChanges = Record<string, ToolPos>;
type ZoneProps = {
    x: number;
    y: number;
    toolery: CarChanges;
    // backgrounds: string[];
    // cars: string[][];

    //moreSaves: (currsaves: number) => void;
    saveCar: (carId: number, changes: CarChanges) => void;
    //setAah: (aah: string) => void;
    //setTools: (tools: CarChanges) => void;
};

const Zone: React.FC<ZoneProps> = (props) => {
    const { x, y, saveCar, toolery } = props;
    //const [square, setSquare] = useState<string[]>([]);
    const [aah, setAah] = useState<string>("");
    const [tools, setTools] = useState<CarChanges>({});
    const [savedtools, setSavedTools] = useState<CarChanges>({});
    const [backgroundIndex, setBackgroundIndex] = useState<number>(0);
    //const [carState,setCarState]=useState<string>("");
    const [color, setColor] = useState<number>(0);
    const [colorNum, setColorNum] = useState(0);
    const [tireNum, setTireNum] = useState(0);
    const [tintNum, setTintNum] = useState(0);
    const [background, setBackground] = useState(7);
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: [ItemTypes.TOOL],
        //move: () => moveTool(item.title, item.top, item.left),
        drop: (
            item: {
                type: string;
                id: string;
                top: number;
                left: number;
                title: string;
            },
            monitor: DropTargetMonitor
        ) => {
            const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveTool(item.id, left, top);
            return undefined;
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });
    const addBackground = (name: string) => {
        if (name === "City") {
            setBackground(0);
        } else if (name === "Forest") {
            setBackground(1);
        } else if (name === "Street") {
            setBackground(2);
        } else if (name === "Dump") {
            setBackground(3);
        } else if (name === "Mountain") {
            setBackground(4);
        } else if (name === "Alley") {
            setBackground(5);
        } else if (name === "Cave") {
            setBackground(6);
        } else if (name === "Garage") {
            setBackground(7);
        }
    };
    const changeCarImage = (name: string) => {
        if (name === "FillTires") {
            setTireNum(0);
        } else if (name === "SlashTires") {
            setTireNum(1);
        }
        if (name === "Red") {
            setColorNum(0);
        } else if (name === "Blue") {
            setColorNum(1);
        } else if (name === "Green") {
            setColorNum(2);
        } else if (name === "Yellow") {
            setColorNum(3);
        } else if (name === "Purple") {
            setColorNum(4);
        } else if (name === "Orange") {
            setColorNum(5);
        }
        if (name === "LightTint") {
            setTintNum(1);
        } else if (name === "MediumTint") {
            setTintNum(2);
        } else if (name === "DarkTint") {
            setTintNum(3);
        }
    };

    const [{ isOverr, canDropp }, dropp] = useDrop({
        accept: [
            ItemTypes.DROPS,
            ItemTypes.ONEPOS,
            ItemTypes.CARS,
            ItemTypes.BACKS,
            ItemTypes.DRAGS
        ],
        //,ItemTypes.DRAGS,

        //canDrop: () => canMovePic(x, y),
        //move: () => moveTool(item.title, item.top, item.left),
        drop: (
            item: {
                type: string;
                pic: string;
                top: number;
                left: number;
                title: string;
            },
            monitor: DropTargetMonitor
        ) => {
            if (item.type === ItemTypes.BACKS) {
                addBackground(item.title);
            } else if (item.type === ItemTypes.CARS) {
                changeCarImage(item.title);
            } else if (item.type === ItemTypes.ONEPOS) {
                addToolToBoard(item.pic, item.top, item.left, "WingSide");
            } else {
                addToolToBoard(item.pic, item.top, item.left, item.title);
            }
            //monitor.getClientOffset
            // const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
            // const leftt = Math.round(delta.x);
            // const topp = Math.round(delta.y);
            console.log("here you are(" + y + "," + x + ")");
        },
        collect: (monitor) => ({
            isOverr: !!monitor.isOver(),
            canDropp: !!monitor.canDrop()
        })
    });
    const addToolToBoard = (
        tool: string,
        top: number,
        left: number,
        title: string
    ) => {
        //const t = toolery.filter((toolname) => title === toolname);
        //const exist = Object.keys(tools).map((toolna) => title === toolname);
        // if(tools[aah])
        //setColor(0);
        //setBackgroundIndex(0);
        if (title === "WipeCar" || title === "ShineCar") {
            console.log(title);
            const copy: CarChanges = {};
            setTools({
                ["drag"]: { top: top, left: left, title: title },
                ...tools
            });
        } else if (title === "WingSide") {
            setTools({
                ["wing"]: { top: 31, left: 496, title: title },
                ...tools
            });
        } else {
            setAah(aah + "a");
            setTools({
                ...tools,
                [aah]: { top: top, left: left, title: title }
            });
        }

        //setSquare((square) => [t[0], ...square]);
    };
    // const removeToolFromBoard = (
    //     toolid: string
    // ) => {
    //     Object.keys(tools).map((aha: string) => () );
    // };
    const saveChanges = () => {
        //  {left: tools[key].left, top: tools[key].top, title: {tools[key].title}
        // const savedtools={};
        // Object.keys(tools).map((aha: string) => );
        const copy = JSON.parse(JSON.stringify(tools)) as typeof tools;
        //saveCar(currSaves, copy);
    };

    const moveTool = useCallback(
        (id: string, left: number, top: number) => {
            setTools(
                update(tools, {
                    [id]: {
                        $merge: { left, top }
                    }
                })
            );
        },
        [tools, setTools]
    );
    const addTool = (t: string) => {
        //tool: string,
        // top: number,
        // left: number,
        // title: string
        // const newtool = (
        //     <div ref={boxRef} className="box">
        //         <img src={Hammer} alt="dirt" />
        //     </div>
        // );
        setAah(aah + "a");
        //setTools({ ...tools, [aah]: { top: top, left: left, title: title } });
        setTools({ ...tools, [aah]: { top: 0, left: 0, title: t } });
        //setTools({});
    };
    const clear = () => {
        setTools({});
    };

    return (
        <>
            <div>
                <div
                    ref={dropp}
                    //className="toolncar"
                    style={{
                        backgroundImage: `url(${backgrounds[background]})`
                    }}
                >
                    <div
                        ref={drop}
                        className="toolncar"
                        style={{
                            backgroundImage: `url(${cars[colorNum][tireNum][tintNum]}`,
                            //backgroundImage: `url(${"RedCar.png"})`,
                            width: 650,
                            height: 400
                        }}
                    >
                        {Object.keys(tools).map((key: string) => (
                            <Tool
                                key={key}
                                id={key}
                                left={tools[key].left}
                                top={tools[key].top}
                                title={tools[key].title}
                            />
                        ))}
                        {/* {isOver && !canDrop && <Overlay color="red" />}
                        {!isOver && canDrop && <Overlay color="yellow" />}
                        {isOver && canDrop && <Overlay color="green" />} */}
                    </div>
                </div>
                <div>
                    <Button onClick={() => addTool("meep")}>Add Effect</Button>
                    <Button onClick={clear}>Clear Car</Button>
                    <Button onClick={saveChanges}>Save Car</Button>
                </div>
            </div>
        </>
    );
};

export default Zone;
