import React, { Fragment } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";
import { Food } from "./Interfaces/food";

interface PicProps {
    foodItem: Food;
}
const Pic: React.FC<PicProps> = (props) => {
    const { foodItem } = props;
    const [{ isDragging }, drag] = useDrag({
        //item: { type: ItemTypes.PIC, Food: foodItem },
        item: { type: ItemTypes.PIC, Food: foodItem },
        // end(item, monitor) {
        //     // if (monitor.didDrop() === true) {
        //     //     alert("test");
        //     // }
        //     alert("test");
        // },
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
