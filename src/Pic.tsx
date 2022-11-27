import React, { Fragment } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";

const Pic: React.FC = () => {
    return (
        <Fragment>
            <div
                style={{
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
            </div>
        </Fragment>
    );
};

export default Pic;
