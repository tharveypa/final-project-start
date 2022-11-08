import React, { useState } from "react";
import RedCar from "./red car.png";
import BlueCar from "./blue car.png";
import GreenCar from "./green car.png";
import { Button } from "react-bootstrap";

type CarSpaceProps = {
    color: string;
    clean: boolean;
    tirefill: boolean;
    windowstate: boolean;
    shine: boolean;
};

<<<<<<< HEAD
const CarSpace: React.FC<CarSpaceProps> = () => {
    return <img src={CarPic} alt="car" />;
=======
const Car: React.FC<CarProps> = (props) => {
    const [colorNum, setColorNum] = useState(0);
    return (
        <div>
            {colorNum == 0 && <img src={RedCar} alt="red car" />}
            {colorNum == 1 && <img src={BlueCar} alt="blue car" />}
            {colorNum == 2 && <img src={GreenCar} alt="green car" />}
            <Button onClick={() => setColorNum((colorNum + 1) % 3)}>
                Change Color (Red/Blue/Green)
            </Button>
        </div>
    );
>>>>>>> 26d96b71909cae35bcd3acbc5284f16fa65ffbbb
};

export default CarSpace;
