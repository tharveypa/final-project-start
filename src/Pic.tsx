import React, { Fragment, useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";
import { tileItem } from "./interfaces";
// import { images, image1 } from "./image/images";
// import images from "./image/img";
// import { BackgroundImage } from "./image/img";
// import { image } from "html2canvas/dist/types/css/types/image";

type ObjectProp = {
    tile: tileItem;
    //position: [number, number];
    //orientation: number;
    //size: number;
    //texture: string;
    //type: string;
};

const Pic: React.FC<ObjectProp> = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.PIC, tile: props.tile },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });
    // const [choseImage, SetChoseImage] = useState<string>("./image/cat.jpg");
    // const currentImage = SetChoseImage("./image/cat.jpg" || "./image/dog.jpg");
    // const current = choseImage === currentImage?
    // const image = ["./image/cat.jpg", "./image/dog.jpg"];
    return (
        <Fragment>
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 10,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
            >
                <div>
                    {props.tile.color}
                    <img
                        src={require("./bosun_tally.jpg")}
                        width="100%"
                        height="100%"
                    />
                </div>
                <div>
                    {props.tile.color}
                    <img
                        src={require("./image/cat.jpg")}
                        width="100%"
                        height="100%"
                    />
                </div>
                <div>
                    {props.tile.color}
                    <img
                        src={require("./image/tree.jpg")}
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            <div
                ref={drag}
                style={{
                    opacity: isDragging ? 1 : 0.5,
                    fontSize: 10,
                    fontWeight: "bold",
                    cursor: "move",
                    textAlign: "center"
                }}
            >
                {props.tile.color}
                <img
                    src={require("./image/hugeStone.jpg")}
                    width="100%"
                    height="100%"
                />
                {props.tile.color}
                <img
                    src={require("./image/stone.jpg")}
                    width="100%"
                    height="100%"
                />
            </div>
        </Fragment>
    );
};

export default Pic;
