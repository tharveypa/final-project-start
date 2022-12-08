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

const styles: CSSProperties = {
    width: 200,
    height: 200,
    border: "1px solid black",
    position: "relative"
};
type CarChanges = Record<string, ToolPos>;
type ZoneProps = {
    x: number;
    y: number;
    tool: string;
};

const Zone: React.FC<ZoneProps> = (props) => {
    const { x, y, tool, children } = props;
    //const [square, setSquare] = useState<string[]>([]);
    const [aah, setAah] = useState<string>("");
    const [tools, setTools] = useState<CarChanges>({});
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.DIRT,
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
    const addTool = () => {
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
        setTools({ ...tools, [aah]: { top: 0, left: 0, title: aah } });
        //setTools({});
    };
    return (
        <>
            <div ref={drop} style={styles}>
                {Object.values(tools).map((t: ToolPos) => (
                    <Tool
                        key={t.title}
                        id={t.title}
                        left={t.left}
                        top={t.top}
                    />
                ))}
            </div>
            <div>
                <Button onClick={addTool}>addtool</Button>
            </div>
        </>
    );
};

export default Zone;
