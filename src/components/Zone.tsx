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

import Tool from "./Tool";
import { Button } from "react-bootstrap";
import Overlay from "../Overlay";
import { backgrounds, cars } from "./interfacing/ImageRenders";

import "./images/RedCar.png";

type CarChanges = Record<string, ToolPos>;
type ZoneProps = {
    x: number;
    y: number;
    carId: string;
    toolery: CarChanges;
    color: number;
    tire: number;
    tint: number;
    back: number;
    // backgrounds: string[];
    // cars: string[][];

    //moreSaves: (currsaves: number) => void;
    saveCar: (
        carId: string,
        color: number,
        tire: number,
        tint: number,
        back: number,
        changes: CarChanges
    ) => void;
    //setAah: (aah: string) => void;
    //setTools: (tools: CarChanges) => void;
};

const Zone: React.FC<ZoneProps> = (props) => {
    const { x, y, carId, toolery, color, tire, tint, back, saveCar } = props;
    //const [square, setSquare] = useState<string[]>([]);
    const [aah, setAah] = useState<string>("a");
    const [tools, setTools] = useState<CarChanges>({});
    const [colorNum, setColorNum] = useState(color);
    const [tireNum, setTireNum] = useState(tire);
    const [tintNum, setTintNum] = useState(tint);
    const [background, setBackground] = useState(back);
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
        } else if (title === "BreakWindows") {
            if (tools["window1"]) {
                setTools({
                    ["window2"]: { top: 75, left: 241, title: "Crack" },
                    ...tools
                });
            } else {
                setTools({
                    ["window1"]: { top: 77, left: 419, title: "Crack" },
                    ...tools
                });
            }
        } else if (title === "WingSide") {
            setTools({
                ["wing"]: { top: 31, left: 496, title: "WingSide" },
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
        saveCar(carId, colorNum, tireNum, tintNum, background, tools);
        //  {left: tools[key].left, top: tools[key].top, title: {tools[key].title}
        // const savedtools={};
        // Object.keys(tools).map((aha: string) => );
        //const copy = JSON.parse(JSON.stringify(tools)) as typeof tools;
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
    const reset = () => {
        setBackground(7);
        setTireNum(0);
        setColorNum(0);
        setTintNum(0);
        setAah("a");
        setTools({});
    };
    function isClose(x: number, y: number, cy: number, cx: number) {
        return (x + 10 >= cx || x - 10 <= cx) && (y + 10 >= cy || y - 10 <= cy);
    }

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
                        {/* eslint-disable-next-line no-extra-parens */}
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
                    {/* <Button onClick={() => addTool("meep")}>Add Effect</Button> */}
                    <Button onClick={reset}>Reset Car</Button>
                    <Button onClick={saveChanges}>Save Car</Button>
                </div>
            </div>
        </>
    );
};

export default Zone;
