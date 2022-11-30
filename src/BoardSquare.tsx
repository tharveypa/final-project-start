/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canMovePic, movePic } from "./game";
import Tank from "./interfaces/Tank";
import Overlay from "./Overlay";
import Square from "./Square";
import { TankEdit } from "./TankEdit";

type BoardSquareProps = {
    x: number;
    y: number;
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y } = props;
    const salt = x % 2 === 1;
    const pred = x % 3 === 0;
    const [newTank, setNewTank] = useState<Tank>({
        id: x,
        x: x,
        y: y,
        salt: salt,
        pred: pred
    });
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(x, y, newTank),
        drop: () => movePic(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });
    const [edit, setEdit] = useState<boolean>(false);

    function swapEdit() {
        setEdit(!edit);
    }

    function turnOnEdit() {
        setEdit(true);
    }

    function editTank(thisTank: Tank) {
        setNewTank({ ...thisTank });
    }

    return (
        <div
            ref={drop}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                border: "2px solid black"
            }}
        >
            {!edit && (
                <Square thisTank={newTank} turnOnEdit={turnOnEdit}></Square>
            )}
            {edit && (
                <TankEdit
                    tank={newTank}
                    swapEdit={swapEdit}
                    editTank={editTank}
                ></TankEdit>
            )}
            {isOver && !canDrop && <Overlay color="red" opacity={0.5} />}
            {!isOver && canDrop && <Overlay color="yellow" opacity={0.5} />}
            {isOver && canDrop && <Overlay color="green" opacity={0.5} />}
        </div>
    );
};

export default BoardSquare;
//inside <Square> here </Square> = {children}
