import React, { Fragment } from "react";
import type { FC, ReactNode } from "react";
// import { DragSourceMonitor, useDrag } from "react-dnd";
// //import "../App.css";
// import { ItemTypes } from "../constants";
// CSSProperties,
// const style: CSSProperties = {
//     position: "absolute",
//     border: "1px dashed gray",
//     backgroundColor: "white",
//     padding: "0.5rem 1rem",
//     cursor: "move"
// };

type ToolProps = {
    id: string;
    left: number;
    top: number;
    children?: ReactNode;
};

export const Tool: FC<ToolProps> = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, left, top, children } = props;
    // const [{ isDragging }, drag] = useDrag({
    //     item: { type: ItemTypes.PIC, pic: pic },
    //     collect: (monitor) => ({
    //         isDragging: !!monitor.isDragging()
    //     })
    // });
    //sus
    // const [{ isDragging }, drag] = useDrag({
    //     item: { type: ItemTypes.DIRT, t: { id, left, top } },
    //     collect: (monitor: DragSourceMonitor) => ({
    //         isDragging: !!monitor.isDragging()
    //     })
    // });

    // if (isDragging) {
    //     return <div ref={drag}/>;
    // }
    return (
        <Fragment>
            <div
                // ref={drag}
                style={{
                    // opacity: isDragging ? 1 : 0.5,
                    fontSize: 50,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                    // left,
                    // top
                }}
            >
                <header>{id}</header>
                {/* {children} */}
            </div>
        </Fragment>
    );
};
export default Tool;
