import React, { Fragment } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";
import { Furniture } from "./Interfaces/furniture";

interface PicProps {
    FurnitureItem: Furniture;
}
const Pic: React.FC<PicProps> = (props) => {
    const { FurnitureItem } = props;
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIC, Furniture: FurnitureItem },
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
                <img src={FurnitureItem.image} width="80" height="80" />
            </div>
        </Fragment>
    );
};

export default Pic;
