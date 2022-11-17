import React from "react";
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
export const CarSpace: React.FC<CarSpaceProps> = (props) => {
    return <div>{renderDestroy(1000, 1000, props.DirtPosition)}</div>;
};
export default CarSpace;
