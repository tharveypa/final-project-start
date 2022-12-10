/* eslint-disable @typescript-eslint/no-unused-vars */
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
import type { ToolPos, Cars } from "../components/interfaces";
import CarSquare from "./components/CarSquare";

// import type { DropTargetMonitor, XYCoord } from "react-dnd";
// import { useDrop } from "react-dnd";
import Tool from "./components/Tool";
// import { ItemTypes } from "../constants";DragItem,
type CarChanges = Record<string, ToolPos>;

type SavedCarProps = {
    x: number;
    y: number;
    toolery: CarChanges;
    currAah: string;
    saveCar: (toolname: string, changes: CarChanges) => void;
    setAah: (aah: string) => void;
    setTools: (tools: CarChanges) => void;
};

const SavedCars: React.FC<SavedCarProps> = (props) => {
    const { } =
        props;
    //currAah = currAah + "a";
    //const black = (x + y) % 2 === 1;
    const [saves, setSaves] = useState<Cars>({makeup:[0, 0, 0], background: 7, {}});
    const addSave = (
        tool: string,
        top: number,
        left: number,
        title: string
    ) => {
setSaves(()=>{
        
    };
};
    const clear = () => {
        setSaves([]);
    };
    return (
        <>
            <div
                ref={dropp}
                style={{
                    width: "200px",
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
                {/* <Square black={black}>{children}</Square>
                {isOver && !canDrop && <Overlay color="red" />}
                {!isOver && canDrop && <Overlay color="yellow" />}
                {isOver && canDrop && <Overlay color="green" />} */}
            </div>
        </>
    );
};

export default SavedCars;
