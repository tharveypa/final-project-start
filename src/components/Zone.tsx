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
// import { ItemTypes } from "../constants";DragItem,
import Car from "./Car";
import RedCar from "./images/redcar.png";
import RedCarLeftTire from "./images/redcar left tire.png";
import RedCarRightTire from "./images/redcar right tire.png";
import RedCarBothTires from "./images/redcar both tires.png";
import BlueCar from "./images/bluecar.png";
import BlueCarLeftTire from "./images/bluecar left tire.png";
import BlueCarRightTire from "./images/bluecar right tire.png";
import BlueCarBothTires from "./images/bluecar both tires.png";
import GreenCar from "./images/greencar.png";
import GreenCarLeftTire from "./images/greencar left tire.png";
import GreenCarRightTire from "./images/greencar right tire.png";
import GreenCarBothTires from "./images/greencar both tires.png";

const cars = [
    [RedCar, RedCarLeftTire, RedCarRightTire, RedCarBothTires],
    [GreenCar, GreenCarLeftTire, GreenCarRightTire, GreenCarBothTires],
    [BlueCar, BlueCarLeftTire, BlueCarRightTire, BlueCarBothTires]
];
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
    currAah: string;
    saveCar: (toolname: string, changes: CarChanges) => void;
    //setAah: (aah: string) => void;
    //setTools: (tools: CarChanges) => void;
};

const Zone: React.FC<ZoneProps> = (props) => {
    const { x, y, saveCar, toolery, currAah } = props;
    //const [square, setSquare] = useState<string[]>([]);
    const [aah, setAah] = useState<string>("");
    const [tools, setTools] = useState<CarChanges>({});
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: [
            //ItemTypes.DROPS
            ItemTypes.ONEPOS,
            ItemTypes.CARS,
            ItemTypes.BACKS
        ],
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
            if (item.type === ItemTypes.BACKS) {
                //addBackground(something something);
            } else if (item.type === ItemTypes.CARS) {
                //changeCar(something something)
            } else if (item.type === ItemTypes.ONEPOS) {
                //putOnCar(something something)
            }
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
    const [{ isOverr, canDropp }, dropp] = useDrop({
        accept: [
            ItemTypes.DROPS
            //ItemTypes.ONEPOS,
            //ItemTypes.CARS,
            //ItemTypes.BACKS
        ],
        //canDrop: () => canMovePic(x, y),
        //move: () => moveTool(item.title, item.top, item.left),
        drop: (item: {
            type: string;
            pic: string;
            top: number;
            left: number;
            title: string;
        }) => addPicToBoard(item.pic, item.top, item.left, item.title),
        collect: (monitor) => ({
            isOverr: !!monitor.isOver(),
            canDropp: !!monitor.canDrop()
        })
    });
    const addPicToBoard = (
        tool: string,
        top: number,
        left: number,
        title: string
    ) => {
        //const t = toolery.filter((toolname) => title === toolname);
        //const exist = Object.keys(tools).map((toolna) => title === toolname);
        // if(tools[aah])
        setAah(aah + "a");
        setTools({
            ...tools,
            [aah]: { top: top, left: left, title: title }
        });

        //setSquare((square) => [t[0], ...square]);
    };
    const saveChanges = () => {
        saveCar(aah, tools);
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
    // const addImageToBoard = (pic: string) => {
    //     const p = pics.filter((picture) => pic === picture);
    //     setSquare((square) => [...square, p[0]]);
    // };
    // const containerRef = useRef<HTMLDivElement>(null);
    // const boxRef = useRef<HTMLDivElement>(null);
    // // const dirt = (
    // //     <div ref={boxRef} className="box">
    // //         <img src={Dirt} alt="dirt" />
    // //     </div>
    // // );
    // const [tools, setTools] = useState<JSX.Element[]>([]);
    // const isClicked = useRef<boolean>(false);

    // const coords = useRef<{
    //     startX: number;
    //     startY: number;
    //     lastX: number;
    //     lastY: number;
    // }>({
    //     startX: props.x,
    //     startY: props.y,
    //     lastX: 0,
    //     lastY: 0
    // });

    // useEffect(() => {
    //     if (!boxRef.current || !containerRef.current) return;

    //     const box = boxRef.current;
    //     const container = containerRef.current;

    //     const onMouseDown = (e: MouseEvent) => {
    //         isClicked.current = true;
    //         coords.current.startX = e.clientX;
    //         coords.current.startY = e.clientY;
    //     };

    //     const onMouseUp = (e: MouseEvent) => {
    //         isClicked.current = false;
    //         coords.current.lastX = box.offsetLeft;
    //         coords.current.lastY = box.offsetTop;
    //     };

    //     const onMouseMove = (e: MouseEvent) => {
    //         if (!isClicked.current) return;

    //         const nextX =
    //             e.clientX - coords.current.startX + coords.current.lastX;
    //         const nextY =
    //             e.clientY - coords.current.startY + coords.current.lastY;

    //         box.style.top = `${nextY}px`;
    //         box.style.left = `${nextX}px`;
    //     };

    //     box.addEventListener("mousedown", onMouseDown);
    //     box.addEventListener("mouseup", onMouseUp);
    //     container.addEventListener("mousemove", onMouseMove);
    //     container.addEventListener("mouseleave", onMouseUp);

    //     const cleanup = () => {
    //         box.removeEventListener("mousedown", onMouseDown);
    //         box.removeEventListener("mouseup", onMouseUp);
    //         container.removeEventListener("mousemove", onMouseMove);
    //         container.removeEventListener("mouseleave", onMouseUp);
    //     };

    //     return cleanup;
    // }, []);
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
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    return (
        <>
            {" "}
            <div>
                <div
                    ref={dropp}
                    className="toolncar"
                    // style={{
                    //     backgroundImage: `url(${backgrounds[backgroundIndex]})`
                    // }}
                >
                    <div ref={drop} style={styles}>
                        {/* eslint-disable-next-line no-extra-parens*/}
                        {Object.keys(tools).map((key: string) => (
                            <Tool
                                key={key}
                                id={key}
                                left={tools[key].left}
                                top={tools[key].top}
                                title={tools[key].title}
                            />
                        ))}
                        <img src={RedCar} alt="car model" />
                    </div>
                </div>
                <div>
                    <Button onClick={() => addTool("meep")}>Add Effect</Button>
                    <Button onClick={clear}>Clear Car</Button>
                </div>
            </div>
        </>
    );
};

export default Zone;
