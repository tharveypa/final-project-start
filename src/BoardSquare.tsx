import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canAddPic, addPic, canMovePic, movePic } from "./game";
import Pic from "./Pic";
import Overlay from "./Overlay";
import Square from "./Square";
import { Button } from "react-bootstrap";
import CarSquare from "./components/CarSquare";
import Car from "./components/Car";

type BoardSquareProps = {
    x: number;
    y: number;
    pics: string[];
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y, children } = props;
    const black = (x + y) % 2 === 1;
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
        const p = props.pics.filter((picture) => pic === picture);
        setSquare((square) => [...square, props.pics[0]]);
    };
    // const clear = () => {
    //     setSquare([]);
    // };
    return (
        <>
            <div
                //ref={drop}
                style={{
                    position: "relative",
                    width: "200%",
                    height: "150%"
                }}
            >
                {/* <Square black={black}>{children}</Square> */}
                <Car
                    color={0}
                    clean={true}
                    tirefill={true}
                    window={true}
                    pics={props.pics}
                    x={1}
                    y={2}
                ></Car>
                {/* {isOver && !canDrop && <Overlay color="red" />}
                {!isOver && canDrop && <Overlay color="yellow" />}
                {isOver && canDrop && <Overlay color="green" />} */}
                <ul>
                    {square.map(
                        (p: string): JSX.Element => (
                            <div key={p}>
                                <CarSquare pic={p} />
                            </div>
                        )
                    )}
                </ul>
            </div>
            <div>{/* <Button onClick={clear}>Clear</Button> */}</div>
        </>
    );
};

export default BoardSquare;
