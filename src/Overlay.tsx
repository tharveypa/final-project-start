import React from "react";

type OverlayProps = {
    color: string;
    opacity: number;
};

const Overlay: React.FC<OverlayProps> = (props) => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                zIndex: 1,
                opacity: props.opacity,
                backgroundColor: props.color
            }}
        />
    );
};

export default Overlay;

/*pic file
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
*/
