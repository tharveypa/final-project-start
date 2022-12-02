import RedCar from "./images/redcar.png";
import BlueCar from "./images/bluecar.png";
import GreenCar from "./images/greencar.png";
import React, { useState } from "react";
//  { useCallback, } from "react";
import { Button } from "react-bootstrap";
import Street from "./images/street.jpg";
import City from "./images/city.jpg";
import Forest from "./images/forest.jpg";
//import Dirt from "./images/dirt.png";
// import update from "immutability-helper";

// import type { DropTargetMonitor, XYCoord } from "react-dnd";
// import { useDrop } from "react-dnd";
import Tool from "./Tool";
import type { DragItem, ToolPos } from "./interfaces";
// import { ItemTypes } from "../constants";

type CarChanges = Record<string, ToolPos>;
export type CarProps = {
    saveCar: (car: number, toolname: string, changes: CarChanges) => void;
    color: number;
    clean: boolean;
    tirefill: boolean;
    window: boolean;
};
export const Car: React.FC<CarProps> = (props) => {
    const backgrounds = [Street, City, Forest];
    const [colorNum, setColorNum] = useState(0);
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [aah, setAah] = useState<string>("");
    const [tools, setTools] = useState<CarChanges>({});
    const [carNum, setCarNum] = useState<number>(0);
    const saveIt = () => {
        setCarNum(carNum + 1);
        props.saveCar(carNum, aah, tools);
    };
    // const moveTool = useCallback(
    //     (id: string, left: number, top: number) => {
    //         setTools(
    //             update(tools, {
    //                 [id]: {
    //                     $merge: { left, top }
    //                 }
    //             })
    //         );
    //     },
    //     [tools, setTools]
    // );
    // //const [, drop] = useDrop(() => ({
    // const [, drop] = useDrop({
    //     accept: ItemTypes.DIRT,
    //     drop(item: DragItem, monitor: DropTargetMonitor) {
    //         const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
    //         const left = Math.round(item.left + delta.x);
    //         const top = Math.round(item.top + delta.y);
    //         addEffect(item.id, left, top);
    //         return undefined;
    //     },
    //     collect: (monitor: DropTargetMonitor) => ({
    //         isOver: !!monitor.isOver(),
    //         canDrop: !!monitor.canDrop()
    //     })
    //     //
    //     // [moveTool]
    // });
    const clearEffects = (): void => {
        setAah("");
        setTools({});
    };
    const addEffect = (top: number, left: number, id: string): void => {
        setAah(aah + "a");
        setTools({ ...tools, [aah]: { top: top, left: left, title: id } });
    };
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${backgrounds[backgroundIndex]})`
                }}
            >
                {/* <div ref={drop} className="car">*/}
                {Object.values(tools).map((t: ToolPos) => (
                    <Tool key={t.title} id={t.title} left={t.left} top={t.top}>
                        {t.title}
                    </Tool>
                ))}
                {/* </div>  */}
                {colorNum == 0 && <img src={RedCar} alt="red car" />}
                {colorNum == 1 && <img src={BlueCar} alt="blue car" />}
                {colorNum == 2 && <img src={GreenCar} alt="green car" />}

                {/* <div ref={boxRef} className="box">
                        <img src={Dirt} alt="dirt" />
                    </div>*/}
            </div>
            <div>
                <Button onClick={() => clearEffects}>clear Effects</Button>
                <Button onClick={() => addEffect(0, 0, "meep")}>
                    addEffect
                </Button>
                <Button onClick={() => setColorNum((colorNum + 1) % 3)}>
                    Change Color (Red/Blue/Green)
                </Button>
                <Button
                    onClick={() =>
                        setBackgroundIndex((backgroundIndex + 1) % 3)
                    }
                >
                    Change Background (Street/City/Forest)
                </Button>
                <Button variant="primary" onClick={saveIt}>
                    Save Changes
                </Button>
            </div>
            {/* {props.children} */}
        </div>
    );
};

export default Car;
