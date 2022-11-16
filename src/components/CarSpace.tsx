import React from "react";
import DirtTool from "./Destroy Tools/DirtTool";
import Car from "./Car";

type CarSpaceProps = {
    DirtPosition: number[];
};

//woah
const Car: React.FC<CarProps> = (props) => {
    const [colorNum, setColorNum] = useState(0);

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
    return <div>{renderDestroy(1000, 1000, props.DirtPosition)}</div>;
};
export default CarSpace;
