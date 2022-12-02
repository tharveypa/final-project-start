import RedCar from "./images/redcar.png";
import BlueCar from "./images/bluecar.png";
import GreenCar from "./images/greencar.png";
import React, { useState, useEffect, useRef } from "react";
//  { useCallback} from "react";
import { Button } from "react-bootstrap";
import Street from "./images/street.jpg";
import City from "./images/city.jpg";
import Forest from "./images/forest.jpg";
// import Dirt from "./images/dirt.png";
// import update from "immutability-helper";
// import type { CSSProperties, FC } from "react";
// import type { XYCoord } from "react-dnd";
// import { useDrop } from "react-dnd";

// //import { Pic } from "../Pic";
// //import type { DragItem, Tool, Car } from "./interfaces";
// import { ItemTypes } from "../constants";

// const styles: CSSProperties = {
//     width: 500,
//     height: 500,
//     border: "1px solid black",
//     position: "relative"
// };
type CarProps = {
    color: number;
    clean: boolean;
    tirefill: boolean;
    window: boolean;
};

const Car: React.FC<CarProps> = (props) => {
    const backgrounds = [Street, City, Forest];
    const [colorNum, setColorNum] = useState(0);
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [pause, setPause] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const MouseTracker = (e: MouseEvent) => {
            setPause([e.clientX, e.clientY]);
        };
        container.addEventListener("mousemove", MouseTracker);

        const cleanup = () => {
            container.removeEventListener("mousemove", MouseTracker);
        };

        return cleanup;
    }, []);
    // const boxRef = useRef<HTMLDivElement>(null);
    // const isClicked = useRef<boolean>(false);
    // const coords = useRef<{
    //     //window: number[][];
    //     startX: number;
    //     startY: number;
    //     lastX: number;
    //     lastY: number;
    // }>({
    //     startX: 0,
    //     startY: 0,
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
    //         setPause([e.clientX, e.clientY]);
    //     };

    //     const onMouseUp = () => {
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
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${backgrounds[backgroundIndex]})`
                }}
            >
                <div ref={containerRef} className="container">
                    {colorNum == 0 && <img src={RedCar} alt="red car" />}
                    {colorNum == 1 && <img src={BlueCar} alt="blue car" />}
                    {colorNum == 2 && <img src={GreenCar} alt="green car" />}

                    {/* <div ref={boxRef} className="box">
                        <img src={Dirt} alt="dirt" />
                    </div>*/}
                </div>
            </div>
            <div>
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
                {pause.map(
                    // eslint-disable-next-line no-extra-parens
                    (e: number): JSX.Element => (
                        <div key={e}> {e} </div>
                    )
                )}
            </div>
            {props.children}
        </div>
    );
};

export default Car;
