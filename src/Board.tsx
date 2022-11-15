import React, { Dispatch, SetStateAction, useState } from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import {
    CARBOHYDRATE_LIST,
    FRUIT_LIST,
    PROTEIN_LIST,
    VEGETABLE_LIST
} from "./data/foodList";
// import Plate from "./Plate";
import { Food } from "./Interfaces/food";
import { Button } from "react-bootstrap";

const renderPiece = (
    x: number,
    y: number,
    foodItem: Food,
    portions: Food[],
    setPortions: Dispatch<SetStateAction<Food[]>>
) => {
    return (
        <div>
            <Pic
                foodItem={foodItem}
                portions={portions}
                setPortions={setPortions}
            />
        </div>
    );
};

const renderSquare = (
    i: number,
    picPosition: [number, number],
    portions: Food[],
    setPortions: Dispatch<SetStateAction<Food[]>>,
    currentFoodList: Food[]
) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "50%" }}>
            <BoardSquare x={x} y={y} currentFoodList={currentFoodList}>
                {i < currentFoodList.length
                    ? renderPiece(
                        x,
                        y,
                        currentFoodList[i],
                        portions,
                        setPortions
                    )
                    : null}
            </BoardSquare>
        </div>
    );
};

// const renderPlate = (picPosition: [number, number], portions: []) => {
//     const x = 0;
//     const y = 0;

//     return (
//         <div>
//             <Plate
//                 x={x}
//                 y={y}
//                 portions={portions}
//                 setPortions={function (): void {
//                 \;
//                 }}
//             />
//         </div>
//     );
// };

type BoardProps = {
    picPosition: [number, number];
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    const squares = [];
    // const plate = [];
    const [portions, setPortions] = useState<Food[]>([]);
    const [currentFoodList, setCurrentFoodList] =
        useState<Food[]>(PROTEIN_LIST);
    /**Determines the number of drag-and-drop squares to make */
    for (let i = 0; i < currentFoodList.length + 1; i++) {
        squares.push(
            renderSquare(i, picPosition, portions, setPortions, currentFoodList)
        );
        // plate.push(renderPlate(picPosition, portions));
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
                <Button onClick={() => setCurrentFoodList(CARBOHYDRATE_LIST)}>
                    Carbohydrates
                </Button>
                <Button onClick={() => setCurrentFoodList(FRUIT_LIST)}>
                    Fruits
                </Button>
                <Button onClick={() => setCurrentFoodList(PROTEIN_LIST)}>
                    Proteins
                </Button>
                <Button onClick={() => setCurrentFoodList(VEGETABLE_LIST)}>
                    Vegetables
                </Button>
            </div>
        </DndProvider>
    );
};

export default Board;
