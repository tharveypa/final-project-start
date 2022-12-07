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
import Zone from "./components/Zone";
import type { ToolPos } from "./components/interfaces";
import update from "immutability-helper";

// import type { DropTargetMonitor, XYCoord } from "react-dnd";
// import { useDrop } from "react-dnd";
import Tool from "./components/Tool";
// import { ItemTypes } from "../constants";DragItem,
type CarChanges = Record<string, ToolPos>;
type BoardSquareProps = {
    x: number;
    y: number;
    toolery: string[];
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y, toolery, children } = props;
    const black = (x + y) % 2 === 1;
    const [square, setSquare] = useState<string[]>([]);
    const [pos, setPos] = useState<number[]>([]);
    // const [aah, setAah] = useState<string>("");
    // const [tools, setTools] = useState<CarChanges>({});
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const MouseTracker = (e: MouseEvent) => {
            setPos([e.clientX, e.clientY]);
        };
        container.addEventListener("mousemove", MouseTracker);

        const cleanup = () => {
            container.removeEventListener("mousemove", MouseTracker);
        };

        return cleanup;
    }, []);
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(x, y),
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
        const t = toolery.filter((toolname) => title === toolname);
        //const exist = Object.keys(tools).map((toolna) => title === toolname);
        // if(tools[aah])
        // setAah(aah + "a");
        // setTools({ ...tools, [aah]: { top: top, left: left, title: title } });

        setSquare((square) => [...square, t[0]]);
    };
    const clear = () => {
        setSquare([]);
        //setTools({});
    };
    return (
        <>
            <div
                ref={drop}
                // style={{
                //     position: "relative",
                //     width: "90%",
                //     height: "90%",
                //     border: "1px solid black"
                // }}
            >
                <div ref={containerRef} className="container">
                    {/* <Car
                    saveCar={props.saveCar}
                    color={0}
                    clean={true}
                    tirefill={true}
                    window={true}
                ></Car> */}
                    <Zone x={0} y={0} tool={"meep"}></Zone>
                </div>
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
            <div>
                <Button onClick={clear}>Clear</Button>
            </div>
        </>
    );
};

export default BoardSquare;
