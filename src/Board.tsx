import React, { Fragment, useState } from "react";
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
import Plate from "./Plate";
import { Food } from "./Interfaces/food";
import { Button } from "react-bootstrap";

const renderPiece = (x: number, y: number, foodItem: Food) => {
    return (
        <div>
            <Pic foodItem={foodItem} />
        </div>
    );
};

const renderSquare = (
    i: number,
    picPosition: [number, number],
    currentFoodList: Food[]
) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "50%" }}>
            <BoardSquare x={x} y={y} currentFoodList={currentFoodList}>
                {i < currentFoodList.length
                    ? renderPiece(x, y, currentFoodList[i])
                    : null}
            </BoardSquare>
        </div>
    );
};

const renderPlate = (
    i: number,
    picPosition: [number, number],
    currentFoodList: Food[]
) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "50%", height: "50%" }}>
            <Plate x={x} y={y} currentFoodList={currentFoodList}>
                <Fragment>
                    {/* <img src={plate} width="200" height="200" /> */}
                </Fragment>
            </Plate>
        </div>
    );
};

type BoardProps = {
    picPosition: [number, number];
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    const squares = [];
    const plate = [];
    const [currentFoodList, setCurrentFoodList] =
        useState<Food[]>(PROTEIN_LIST);
    /**Determines the number of drag-and-drop squares to make */
    for (let i = 0; i < currentFoodList.length; i++) {
        squares.push(renderSquare(i, picPosition, currentFoodList));
    }
    plate.push(
        renderPlate(currentFoodList.length, picPosition, currentFoodList)
    );
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: "500",
                    height: "500px",
                    border: "1px solid gray"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexWrap: "wrap"
                    }}
                >
                    {squares}
                    {plate}
                    <Button
                        onClick={() => setCurrentFoodList(CARBOHYDRATE_LIST)}
                    >
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
            </div>
        </DndProvider>
    );
};

export default Board;
