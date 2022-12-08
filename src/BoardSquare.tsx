import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canMovePic, movePic } from "./game";
import Overlay from "./Overlay";
import Square from "./Square";
import DropDown from "./dropDown";

type BoardSquareProps = {
    x: number;
    y: number;
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const { x, y, children } = props;
    const black = false; /*(x + y) % 2 === 1;*/
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(x, y),
        drop: () => movePic(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    return (
        <>
            <DropDown black={black}></DropDown>
            <div
                ref={drop}
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                <Square black={black}>{children}</Square>
                {isOver && !canDrop && <Overlay color="red" />}
                {!isOver && canDrop && <Overlay color="yellow" />}
                {isOver && canDrop && <Overlay color="green" />}
                <header>Meghana Yarlagadda megyar@udel.edu</header>
                <header> Grace OLeary goleary22</header>
                <header> Kristina Balta kbalta </header>
            </div>
        </>
    );
};

export default BoardSquare;
