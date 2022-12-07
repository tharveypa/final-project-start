import React from "react";
import CarSquare from "./CarSquare";

<<<<<<< HEAD
const destroy = ["dirt", "birdpoop", "slash", "hammer"];
const str = ["Dirty Car", "Bird Poop", "Slash Tires", "Break Windows"];
=======
//const destroy = [Dirt, BirdPoop, Slash, Hammer];
//const str = ["Dirty Car", "Bird Poop", "Slash Tires", "Break Windows"];
//const destroy = ["./images/dirt.png", "Birdpoop", "Slash", "Hammer,"];
>>>>>>> 8088512cff19cdcf7b202a4039303f3b1a85ee6d

const Destroy = () => {
    return (
        <div>
            <h1>Destroy Mode</h1>
            <p>
<<<<<<< HEAD
                {destroy.map(
                    (t: string, i: number): JSX.Element => (
                        <div key={t.toString()}>
                            <CarSquare pic={t} description={str[i]}></CarSquare>
                        </div>
                    )
                )}
=======
                Destroy Mode Options:
                <div>
                    <img src={Dirt} alt="dirt" />
                    Dirty Car
                </div>
                <div>
                    <img src={BirdPoop} alt="bird poop" />
                    Bird Poop
                </div>
                <div>
                    <img src={Slash} alt="slash tires" />
                    Slash Tires
                </div>
                <div>
                    <img src={Hammer} alt="break windows" />
                    Break Windows
                </div>
                <div>etc</div>
>>>>>>> 8088512cff19cdcf7b202a4039303f3b1a85ee6d
            </p>
        </div>
    );
};

export default Destroy;
