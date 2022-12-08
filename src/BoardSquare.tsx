import React, {
    CSSProperties,
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canAddPic, addPic, canMovePic, movePic } from "./game";
import Pic from "./Pic";
import Overlay from "./Overlay";
import Square from "./Square";
import { Button } from "react-bootstrap";
import type { ToolPos } from "./components/interfaces";
import CarSquare from "./components/CarSquare";
import Car from "./components/Car";

// import type { DropTargetMonitor, XYCoord } from "react-dnd";
// import { useDrop } from "react-dnd";
import Tool from "./components/Tool";
// import { ItemTypes } from "../constants";DragItem,
type CarChanges = Record<string, ToolPos>;
type BoardSquareProps = {
    x: number;
    y: number;
    toolery: CarChanges;
    currAah: string;
    saveCar: (toolname: string, changes: CarChanges) => void;
    setAah: (aah: string) => void;
    setTools: (tools: CarChanges) => void;
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y, toolery, currAah, saveCar, setAah, setTools, children } =
        props;
    //currAah = currAah + "a";
    //const black = (x + y) % 2 === 1;
    const [square, setSquare] = useState<string[]>([]);
    // const [aah, setAah] = useState<string>("");
    // const [tools, setTools] = useState<CarChanges>({});
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        //canDrop: () => canMovePic(x, y),
        //move: () => moveTool(item.title, item.top, item.left),
        drop: (item: {
            type: string;
            pic: string;
            top: number;
            left: number;
            title: string;
        }) => addToolToBoard(item.pic, item.top, item.left, item.title),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
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
        setAah(currAah + "a");
        setTools({
            ...toolery,
            [currAah]: { top: top, left: left, title: title }
        });

        //setSquare((square) => [t[0], ...square]);
    };
    const clear = () => {
        setSquare([]);
        //setTools({});
    };
    return (
        <>
            <div
                ref={drop}
                style={{
                    width: "100px",
                    height: "100px",
                    border: "1px solid black"
                }}
                // style={{
                //     position: "relative",
                //     width: "90%",
                //     height: "90%",
                //     border: "1px solid black"
                // }}
            >
                {/* <div ref={containerRef} className="container">
                    <Car
                    saveCar={props.saveCar}
                ></Car> 
                    <Zone x={0} y={0} effects={square} saveCar={saveCar} />
                </div> */}
                yo
                {/* <div>
                    <Zone x={500} y={100}></Zone>
                </div> */}
                {square.map((p: string) => (
                    <Pic key={p} pic={p} top={0} left={0} title={p} />
                ))}
                {/* <Square black={black}>{children}</Square>
                {isOver && !canDrop && <Overlay color="red" />}
                {!isOver && canDrop && <Overlay color="yellow" />}
                {isOver && canDrop && <Overlay color="green" />} */}
            </div>
        </>
    );
};

export default BoardSquare;
