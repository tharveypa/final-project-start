import React from "react";
import CarPic from "./car.png";

type CarSpaceProps = {
    color: string;
    clean: boolean;
    tirefill: boolean;
    windowstate: boolean;
    shine: boolean;
};

const CarSpace: React.FC<CarSpaceProps> = () => {
    return <img src={CarPic} alt="car" />;
};

export default CarSpace;
