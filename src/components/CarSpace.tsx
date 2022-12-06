import React from "react";
import DirtTool from "./Destroy Tools/DirtTool";
import Car from "./Car";

type CarSpaceProps = {
    DirtPosition: number[];
};

// function renderDestroy(x: number, y: number, [dirtX, dirtY]: number[]) {
//     const isDirtHere = dirtX === x && dirtY === y;
//     const piece = isDirtHere ? <DirtTool /> : null;
//     return <span>{piece}</span>;
//}
export const CarSpace: React.FC<CarSpaceProps> = (props) => {
    return (
        <div>
            {/* <Car color={0} clean={true} tirefill={true} window={true}></Car> */}
            {/* {renderDestroy(1000, 1000, props.DirtPosition)} */}
        </div>
    );
};
export default CarSpace;
