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
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 50,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
            >
                {/*♘*/}
                <img
                    src={require("./bosun_tally.jpg")}
                    width="80"
                    height="80"
                />
                <p>
                    Team Members are : Nafisa Maryam , Jeanae Clark & Sara
                    Heintzelman
                </p>
            </div>
        </Fragment>
    );
};

export default Pic;
