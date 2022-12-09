/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment } from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { ItemTypes } from "./constants";
//import BirdPoop from "./components/images/birdpoop.png";
//import WipeCar from "./components/images/towel.png";
//import ShineCar from "./components/images/shine.png";
//import FillTires from "./components/images/pump.png";
//import RepairWindows from "./components/images/glassrepair.png";
//import Dirt from "./components/images/dirt.png";
//import SlashTires from "./components/images/slash.png";
//import BreakWindows from "./components/images/hammer.png";

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

    //const PimpTools = [WipeCar, ShineCar, FillTires, RepairWindows];
    //const DestroyTools = [Dirt, BirdPoop, SlashTires, BreakWindows];
    const PimpStr = ["Wipe Car", "Shine Car", "Fill Tires", "Repair Windows"];

    return (
        <Fragment>
            <div
                ref={drag}
                style={{
                    position: "relative",
                    border: "1px dashed gray",
                    padding: "0.5 rem 1rem",
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 10,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center",
                    left: left,
                    top: top
                }}
            >
                {/*♘*/}
                <p>{pic + " and " + top}</p>
                <img src={pic} />
            </div>
        </Fragment>
    );
};

export default Pic;
