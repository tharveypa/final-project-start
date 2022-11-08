import React from "react";
import bluecar from "./bluecar.png";

type CarSpaceProps = {
    color: string;
    clean: boolean;
    tirefill: boolean;
    windowstate: boolean;
    shine: boolean;
};

const CarSpace: React.FC<CarSpaceProps> = () => {
    return <img src={bluecar} alt="car" />;
};

export default CarSpace;
