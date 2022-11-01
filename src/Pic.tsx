import React, { Fragment } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";

const Pic: React.FC = () => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIC },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });

    return (
        <Fragment>
            <div
                ref={drag}
                style={{
                    position: "absolute",
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 0,
                    fontWeight: "bold",
                    cursor: "move"
                }}
            >
                <img
                    src={require("./images/pixelFish.jpeg")}
                    width="80"
                    height="80"
                />
            </div>
        </Fragment>
    );
};

export default Pic;
