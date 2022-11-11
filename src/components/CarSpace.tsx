import React, { useState } from "react";
import RedCar from "./images/red car.png";
import BlueCar from "./images/blue car.png";
import GreenCar from "./images/green car.png";
import Street from "./images/street.jpg";
import City from "./images/city.jpg";
import Forest from "./images/forest.jpg";
import { Button } from "react-bootstrap";

type CarProps = {
    color: string;
    clean: boolean;
    tirefill: boolean;
};

const Car: React.FC<CarProps> = () => {
    const backgrounds = [Street, City, Forest];
    const [colorNum, setColorNum] = useState(0);
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${backgrounds[backgroundIndex]})`
                }}
            >
                {colorNum == 0 && <img src={RedCar} alt="red car" />}
                {colorNum == 1 && <img src={BlueCar} alt="blue car" />}
                {colorNum == 2 && <img src={GreenCar} alt="green car" />}
            </div>
            <div>
                <Button onClick={() => setColorNum((colorNum + 1) % 3)}>
                    Change Color (Red/Blue/Green)
                </Button>
                <Button
                    onClick={() =>
                        setBackgroundIndex((backgroundIndex + 1) % 3)
                    }
                >
                    Change Background (Street/City/Forest)
                </Button>
            </div>
        </div>
    );
};

export default Car;