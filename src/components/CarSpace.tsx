import React from "react";
//import RedCar from "./red car.png";
//import BlueCar from "./blue car.png";
//import GreenCar from "./green car.png";
//import { Button } from "react-bootstrap";
import Car from "./Car";
import DirtTool from "./Destroy Tools/DirtTool";

type CarSpaceProps = {
    DirtPosition: number[];
};

function renderDestroy(x: number, y: number, [dirtX, dirtY]: number[]) {
    const isDirtHere = dirtX === x && dirtY === y;
    const piece = isDirtHere ? <DirtTool /> : null;
    return (
        <Car color={0} clean={true} window={true} tirefill={true}>
            {piece}
        </Car>
    );
}
const CarSpace: React.FC<CarSpaceProps> = (props) => {
    return <div>{renderDestroy(0, 0, props.DirtPosition)}</div>;
};
export default CarSpace;
