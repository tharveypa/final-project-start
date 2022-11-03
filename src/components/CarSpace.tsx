import React from "react";
import CarPic from "./car.png";

type CarProps = {
    color: string;
    clean: boolean;
    tirefill: boolean;
};

const Car: React.FC<CarProps> = (props) => {
    return <img src={CarPic} alt="car" />;
};

export default Car;
