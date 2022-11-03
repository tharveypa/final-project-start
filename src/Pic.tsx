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
                    position: "relative",
                    bottom: "80%",
                    zIndex: 1,
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 0,
                    fontWeight: "bold",
                    cursor: "move",
                    width: "30%"
                }}
            >
                <img
                    src={require("./images/pixelFish.png")}
                    width="100%"
                    height="100%"
                />
            </div>
        </Fragment>
    );
};

export default Pic;
