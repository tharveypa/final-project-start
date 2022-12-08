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
import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import Street from "./images/street.jpg";
import City from "./images/city.jpg";
import Forest from "./images/forest.jpg";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { canMovePic } from "../game";
import Overlay from "../Overlay";
import CarSquare from "./CarSquare";
import ToolinBox from "./ToolinBox";

type CarProps = {
    color: number;
    clean: boolean;
    tirefill: number;
    window: boolean;
    pics: string[];
    x: number;
    y: number;
};

const Car: React.FC<CarProps> = (props) => {
    const { color, clean, tirefill, window, pics, x, y, children } = props;
    const backgrounds = [Street, City, Forest];
    const cars = [
        [RedCar, RedCarLeftTire, RedCarRightTire, RedCarBothTires],
        [GreenCar, GreenCarLeftTire, GreenCarRightTire, GreenCarBothTires],
        [BlueCar, BlueCarLeftTire, BlueCarRightTire, BlueCarBothTires]
    ];
    const [colorNum, setColorNum] = useState(0);
    const [tireNum, setTireNum] = useState(0);
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const [square, setSquare] = useState<string[]>([]);
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(x, y),
        drop: (item: { type: string; pic: string }) =>
            addImageToBoard(item.pic),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });
    const addImageToBoard = (pic: string) => {
        pics.push(pic);
        const p = pics.filter((picture) => pic === picture);
        console.log(pic);
        setSquare((square) => [...square, p[0]]);
        console.log(pics);
    };
    const isClicked = useRef<boolean>(false);

    const [pause, setPause] = useState<number[]>([]);

    const coords = useRef<{
        //window: number[][];
        startX: number;
        startY: number;
        lastX: number;
        lastY: number;
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef.current || !containerRef.current) return;

        const box = boxRef.current;
        const container = containerRef.current;

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
            setPause([e.clientX, e.clientY]);
        };

        const onMouseUp = () => {
            isClicked.current = false;
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked.current) return;

            const nextX =
                e.clientX - coords.current.startX + coords.current.lastX;
            const nextY =
                e.clientY - coords.current.startY + coords.current.lastY;

            box.style.top = `${nextY}px`;
            box.style.left = `${nextX}px`;
        };

        box.addEventListener("mousedown", onMouseDown);
        box.addEventListener("mouseup", onMouseUp);
        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseUp);

        const cleanup = () => {
            box.removeEventListener("mousedown", onMouseDown);
            box.removeEventListener("mouseup", onMouseUp);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseUp);
        };

        return cleanup;
    }, []);

    return (
        <div>
            <div
                ref={drop}
                style={{
                    backgroundImage: `url(${backgrounds[backgroundIndex]})`
                }}
            >
                {isOver && canDrop && <Overlay color="green" />}
                <div ref={containerRef} className="container">
                    <img src={cars[colorNum][tireNum]} alt="car model" />
                </div>
            </div>
            <div>
                <Button onClick={() => setColorNum((colorNum + 1) % 3)}>
                    Change Color (Red/Blue/Green)
                </Button>
                <Button onClick={() => setTireNum((tireNum + 1) % 4)}>
                    Tire test (Left/Right/Both)
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
