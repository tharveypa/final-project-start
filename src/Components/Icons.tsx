import React, { Fragment } from "react";
//import { useDrag } from "react-dnd";
//import { ItemTypes } from "../constants";

/** 
interface Props {
    freshwater: boolean;
    predator: boolean;
}
*/
const Icons: React.FC = () => {
    return (
        <Fragment>
            <div
                style={{
                    position: "absolute",
                    bottom: "80%",
                    zIndex: 1,
                    fontSize: 0,
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
            <p></p>
            <div
                style={{
                    position: "absolute",
                    bottom: "80%",
                    zIndex: 1,
                    fontSize: 0,
                    cursor: "move",
                    width: "30%"
                }}
            >
                <img
                    src={require("./images/squid.png")}
                    width="100%"
                    height="100%"
                />
            </div>
        </Fragment>
    );
};
export default Icons;
