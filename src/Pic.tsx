import React, { Fragment } from "react";
import { useDrag } from "react-dnd";
import { tileItem } from "./interfaces";
// import imgList from "./image/allImage";
// import { images, image1 } from "./image/images";
// import images from "./image/img";
// import { BackgroundImage } from "./image/img";
// import { image } from "html2canvas/dist/types/css/types/image";

type ObjectProp = {
    tile: tileItem;
    scale: number;
    //position: [number, number];
    //orientation: number;
    //size: number;
    //texture: string;
    //type: string;
};

const Pic: React.FC<ObjectProp> = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: props.tile.snap, tile: props.tile },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });
    // const [index, setIndex] = useState<number>(0);
    // function CurrentIndex() {
    //     setIndex(index + 1);
    // }
    // let imageAllName = imgList[]

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
                {props.tile.color}
                <img
                    src={require("" + props.tile.src)}
                    width={props.scale + "%"}
                    height={props.scale + "%"}
                />
            </div>
        </Fragment>
    );
};

export default Pic;
