import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import pic1 from "./bosun_tally.jpg";
import { PROTEIN_LIST, FRUIT_LIST } from "./data/foodList";
import { Food } from "./Interfaces/food";

const renderPiece = (
    x: number,
    y: number,
    [picX, picY]: [number, number],
    foodItem: Food
) => {
    // if (x === picX && y === picY) {
    //     return (
    //         <div>
    //             <Pic link={VEGETABLE_LIST[0].image_link} foodName={foodName} />
    //         </div>
    //     );
    // }
    return (
        <div>
            <Pic foodItem={foodItem} />
        </div>
    );
};

const renderSquare = (
    i: number,
    picPosition: [number, number],
    foodItem: Food
) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "100%" }}>
            <BoardSquare x={x} y={y} foodItem={foodItem}>
                {i < PROTEIN_LIST.length
                    ? renderPiece(x, y, picPosition, foodItem)
                    : null}
            </BoardSquare>
        </div>
    );
};

type BoardProps = {
    picPosition: [number, number];
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    const squares = [];
    const foodNames: string[] = ["Apple", "Orange", "Done"];
    /**Determines the number of drag-and-drop squares to make */
    for (let i = 0; i < PROTEIN_LIST.length + 1; i++) {
        squares.push(renderSquare(i, picPosition, PROTEIN_LIST[i]));
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                {squares}
            </div>
        </DndProvider>
    );
};

export default Board;
