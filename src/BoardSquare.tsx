import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canAddPic, addPic, canMovePic, movePic } from "./game";
import Pic from "./Pic";
import Overlay from "./Overlay";
import Square from "./Square";
import { Type } from "typescript";

type BoardSquareProps = {
    x: number;
    y: number;
    pics: string[];
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y, pics, children } = props;
    const black = (x + y) % 2 === 1;
    const [square, setSquare] = useState<string[]>([]);
    const [flic, setFlic] = useState<string>("");
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
        setFlic(pic);
        //const p = pics.filter((picture) => pic === picture);
        setSquare((square) => [...square, flic]);
    };

    return (
        <>
            <div
                ref={drop}
                style={{ position: "relative", width: "90%", height: "90%" }}
            >
                yo
                <Square black={black}>{children}</Square>
                {isOver && !canDrop && <Overlay color="red" />}
                {!isOver && canDrop && <Overlay color="yellow" />}
                {isOver && canDrop && <Overlay color="green" />}
                <ul>
                    {square.map(
                        (p: string): JSX.Element => (
                            <li key={p}>
                                {p}
                                <Square black={black}>{p}</Square>
                                {
                                    //<Pic pic={p} />
                                }
                            </li>
                        )
                    )}
                </ul>
            </div>
        </>
    );
};

export default BoardSquare;
