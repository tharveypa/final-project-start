/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
import RedCar from "./images/redcar.png";
import RedCarLeftTire from "./images/redcar left tire.png";
import RedCarRightTire from "./images/redcar right tire.png";
import RedCarBothTires from "./images/RedCarBothTires.png";
import BlueCar from "./images/BlueCar.png";
import BlueCarLeftTire from "./images/bluecar left tire.png";
import BlueCarRightTire from "./images/bluecar right tire.png";
import BlueCarBothTires from "./images/BlueCarBothTires.png";
import GreenCar from "./images/GreenCar.png";
import React, { useRef, useState } from "react";
//  { useCallback, } from "react";
import { Button, Col, Container } from "react-bootstrap";
import GreenCarLeftTire from "./images/greencar left tire.png";
import GreenCarRightTire from "./images/greencar right tire.png";
import GreenCarBothTires from "./images/GreenCarBothTires.png";
import Street from "./images/street.jpg";
import City from "./images/city.jpg";
import Forest from "./images/forest.jpg";
import Dirt from "./images/dirt.png";
//import Dirt from "./images/dirt.png";
// import update from "immutability-helper";

// import type { DropTargetMonitor, XYCoord } from "react-dnd";
// import { useDrop } from "react-dnd";
import Tool from "./Tool";
import type { ToolPos } from "./interfaces";
// import { ItemTypes } from "../constants";DragItem,
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { canMovePic } from "../game";
import Overlay from "../Overlay";
import CarSquare from "./CarSquare";
import ToolinBox from "./ToolinBox";

type CarChanges = Record<string, ToolPos>;
export type CarProps = {
    saveCar: (car: number, toolname: string, changes: CarChanges) => void;
    color: number;
    clean: boolean;
    tirefill: boolean;
    window: boolean;
};
export const Car: React.FC<CarProps> = (props) => {
    const { color, clean, tirefill, window } = props;
    const backgrounds = [Street, City, Forest];
    /*
    const cars = [
        [RedCar, RedCarLeftTire, RedCarRightTire, RedCarBothTires],
        [GreenCar, GreenCarLeftTire, GreenCarRightTire, GreenCarBothTires],
        [BlueCar, BlueCarLeftTire, BlueCarRightTire, BlueCarBothTires]
    ];
    const [colorNum, setColorNum] = useState(0);
    const [tireNum, setTireNum] = useState(0);
    */
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [aah, setAah] = useState<string>("");
    const [tools, setTools] = useState<CarChanges>({});
    const [carNum, setCarNum] = useState<number>(0);
    // const saveIt = () => {
    //     setCarNum(carNum + 1);
    //     props.saveCar(carNum, aah, tools);
    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const [square, setSquare] = useState<string[]>([]);
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(0, 0),
        drop: (item: { type: string; pic: string }) =>
            addImageToBoard(item.pic),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });
    const addImageToBoard = (pic: string) => {
        //pics.push(pic);
        //const p = pics.filter((picture) => pic === picture);
        console.log(pic);
        //setSquare((square) => [...square, p[0]]);
        //console.log(pics);
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
        <>
            <div>
                <Container>
                    <Col>
                        <div
                            style={{
                                backgroundImage: `url(${backgrounds[backgroundIndex]})`
                            }}
                        >
                            {/* <div ref={drop} className="car">*/}
                            <img
                                src={cars[colorNum][tireNum]}
                                alt="car model"
                            />
                            {/* </div>  */}
                            {colorNum == 0 && (
                                <img src={RedCar} alt="red car" />
                            )}
                            {colorNum == 1 && (
                                <img src={BlueCar} alt="blue car" />
                            )}
                            {colorNum == 2 && (
                                <img src={GreenCar} alt="green car" />
                            )}
                            {/* <div ref={boxRef} className="box">
                        <img src={Dirt} alt="dirt" />
                    </div>*/}
                        </div>
                    </Col>
                    <Col>
                        {Object.values(tools).map((t: ToolPos) => (
                            <Tool
                                key={t.title}
                                id={t.title}
                                left={t.left}
                                top={t.top}
                                title={t.title}
                            >
                                {t.title}
                            </Tool>
                        ))}
                    </Col>
                    <Col>
                        <div>
                            <Button onClick={() => clearEffects}>
                                clear Effects
                            </Button>
                            <Button onClick={() => addEffect(0, 0, "meep")}>
                                addEffect
                            </Button>
                            <Button
                                onClick={() => setColorNum((colorNum + 1) % 3)}
                            >
                                Change Color (Red/Blue/Green)
                            </Button>
                            <Button
                                onClick={() =>
                                    setBackgroundIndex(
                                        (backgroundIndex + 1) % 3
                                    )
                                }
                            >
                                Change Background (Street/City/Forest)
                            </Button>
                            {/* <Button variant="primary" onClick={saveIt}>
                                Save Changes
                            </Button> */}
                        </div>
                    </Col>
                </Container>
                {/* {props.children} */}
                {props.children}
                {/*<div
                ref={drop}
                style={{
                    backgroundImage: `url(${backgrounds[backgroundIndex]})`
                }}
            >
                {isOver && canDrop && <Overlay color="green" />}
                <div ref={containerRef} className="container">
                    <img src={cars[colorNum][tireNum]} alt="car model" />
                </div>
            </div>*/}
            </div>
        </>
    );
};

export default Car;
