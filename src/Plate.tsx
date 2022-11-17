import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { DropTargetMonitor, useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import { canMovePic } from "./game";
import { Food } from "./Interfaces/food";
import Overlay from "./Overlay";
import Square from "./Square";

type PlateProps = {
    x: number;
    y: number;
    currentFoodList: Food[];
};

const Plate: React.FC<PlateProps> = (props) => {
    const { x, y, currentFoodList, children } = props;
    const black = false;
    const [portions, setPortions] = useState<Food[]>([]);

    const onDrop = (monitor: DropTargetMonitor) => {
        const newFoodItem: Food = monitor.getItem().Food;
        const duplicate = portions.find(
            (foodItem: Food): boolean => foodItem.name === newFoodItem.name
        );
        // Only adds the item to the list if it's not already in the list
        if (duplicate === undefined) {
            setPortions([...portions, newFoodItem]);
        } else {
            const newPortionsList = portions.map(
                (foodItem: Food): Food =>
                    foodItem.name === newFoodItem.name
                        ? { ...foodItem, servings: foodItem.servings + 1 }
                        : foodItem
            );
            setPortions(newPortionsList);
        }
    };

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.PIC,
        canDrop: () => canMovePic(x, y, currentFoodList),
        drop: (item, monitor) => onDrop(monitor),
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
            <Square black={black}>
                {children}
                <ul>
                    {/*eslint-disable-next-line no-extra-parens*/}
                    {portions.map((foodItem: Food) => (
                        <li key={foodItem.name}>
                            Food item: {foodItem.name}, Servings:{" "}
                            {foodItem.servings}
                        </li>
                    ))}
                </ul>
            </Square>
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
            <Button onClick={() => setPortions([])}>Clear Plate</Button>
        </div>
    );
};

export default Plate;
