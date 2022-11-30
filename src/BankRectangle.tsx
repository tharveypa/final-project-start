import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canMovePic, movePic } from "./game";
import Overlay from "./Overlay";
import Rectangle from "./Rectangle";

type BankRectangleProps = {
    x: number;
    y: number;
};

const BankRectangle: React.FC<BankRectangleProps> = (props) => {
    const { x, y, children } = props;
    const black = false; /*(x + y) % 2 === 1;*/
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(x, y),
        drop: () => movePic(x, y), //Function that gets called when you drop something. In this case, it calls movePic, but you can make it do whatever
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    return (
        <div
            ref={drop}
            style={{ position: "relative", width: "100%", height: "100%" }}
        >
            <Rectangle black={black}>{children}</Rectangle>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    );
};

export default BankRectangle;
