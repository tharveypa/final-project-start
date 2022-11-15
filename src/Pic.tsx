import React, { Fragment } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";
import { Food } from "./Interfaces/food";

const Pic: React.FC<{
    foodItem: Food;
    setPortions: (newPortions: Food[]) => void;
    portions: Food[];
}> = ({ foodItem, setPortions, portions }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIC },
        end(item, monitor) {
            if (monitor.didDrop() === true) {
                setPortions([...portions, foodItem]);
            }
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });

    return (
        <Fragment>
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 50,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
            >
                <img src={foodItem.image_link} width="80" height="80" />
            </div>
        </Fragment>
    );
};

export default Pic;
