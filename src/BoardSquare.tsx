import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canAddPic, addPic, canMovePic, movePic } from "./game";
import Overlay from "./Overlay";
import Square from "./Square";
import Pic from "./Pic";

type BoardSquareProps = {
    x: number;
    y: number;
    pics: string[];
};

const BoardSquare: React.FC<BoardSquareProps> = (props) => {
    const [square, setSquare] = useState<string>("");
    const { x, y, p, children } = props;
    const black = (x + y) % 2 === 1;
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(x, y),
        drop: (item) => addImageToBoard(item.pic),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });
    // const [{ canAdd }, drop] = useDrop({
    //     accept: ItemTypes.PIC,
    //     canDrop: () => canAddPic(x, y),
    //     drop: () => addPic(x, y),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //         canDrop: !!monitor.canDrop()
    //     })
    // });
    const addImageToBoard = (pic) => {
    	const p = pics.filter((picture: string) => pic === picture);
    	setSquare(p);
    	};

    return (
        <div
            ref={drop}
            style={{ position: "relative", width: "90%", height: "90%" }}
        >
            yo
            <Pic pic={square}/>
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    );
};

export default BoardSquare;
