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
                    width="20"
                    height="20"
                />
            </div>
        </Fragment>
    );
};

export default Pic;
