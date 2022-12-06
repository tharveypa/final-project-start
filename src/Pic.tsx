import React, { Fragment } from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { ItemTypes } from "./constants";

type PicProps = {
    pic: string;
    top: number;
    left: number;
    title: string;
};

const Pic: React.FC<PicProps> = (props) => {
    const { pic, top, left, title } = props;
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.PIC,
            pic: pic,
            top: top,
            left: left,
            title: title
        },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: !!monitor.isDragging()
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
                <p>{pic + " and " + title}</p>
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
