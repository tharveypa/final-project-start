import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Bathtub from "../src/furniture/bathtub.png";
import CoffeeTable from "../src/furniture/coffee_table.png";
import CoffeeTableB from "../src/furniture/coffee_table_B.png";
import CoffeeTableG from "../src/furniture/coffee_table_G.png";
import Couch from "../src/furniture/couch.png";
import CouchB from "../src/furniture/couch_B.png";
import CouchG from "../src/furniture/couch_G.png";
import CouchR from "../src/furniture/couch_R.png";
import DinnerTableB from "../src/furniture/dinner_table_B.png";
import DinnerTableG from "../src/furniture/dinner_table_G.png";
import DinnerTableR from "../src/furniture/dinner_table_R.png";
import DinnerTable from "../src/furniture/dinner_table.png";
import DoubleBed from "../src/furniture/double_bed.png";
import DoubleBedB from "../src/furniture/double_bed_B.png";
import DoubleBedG from "../src/furniture/double_bed_G.png";
import FlatTV from "../src/furniture/flat_tv.png";
import FlatTVB from "../src/furniture/flat_tv_B.png";
import FlatTVG from "../src/furniture/flat_tv_G.png";
import Fridge from "../src/furniture/fridge.png";
import FridgeB from "../src/furniture/fridge_B.png";
import Lamp from "../src/furniture/lamp.png";
import Plant from "../src/furniture/plant.png";
import SingleBed from "../src/furniture/single_bed.png";
import SingleBedB from "../src/furniture/single_bed_B.png";
import SingleBedG from "../src/furniture/single_bed_G.png";
import Sink from "../src/furniture/sink.png";
import Stove from "../src/furniture/stove.png";
import Toilet from "../src/furniture/toilet.png";
import Chair from "../src/furniture/chair.png";
import ChairB from "../src/furniture/chair_B.png";
import ChairG from "../src/furniture/chair_G.png";
import ChairR from "../src/furniture/chair_R.png";
import RectTable from "../src/furniture/rectangle_table.png";
import RectTableB from "../src/furniture/rectangle_table_B.png";
import RectTableG from "../src/furniture/rectangle_table_G.png";
import RectTableR from "../src/furniture/rectangle_table_R.png";
import RoundSink from "../src/furniture/round_sink.png";
import RoundSinkB from "../src/furniture/round_sink_B.png";
import RoundSinkG from "../src/furniture/round_sink_G.png";
import RoundTable from "../src/furniture/round_table.png";
import RoundTableB from "../src/furniture/round_table_B.png";
import RoundTableG from "../src/furniture/round_table_G.png";
import SquareSink from "../src/furniture/square_sink.png";
import SquareSinkB from "../src/furniture/square_sink_B.png";
import Floor1 from "../src/furniture/room_floor_1.png";

function App(): JSX.Element {
    const [expanded, setExpanded] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const handleDropDownFocus = (state: boolean) => {
        setExpanded(!state);
    };

    const handleClickOutside = (e: any) => {
        if (expanded && !dropdownRef.current?.contains(e.target as Node)) {
            setExpanded(false);
        }
    };

    window.addEventListener("click", handleClickOutside);
    return (
        <div className="App">
            <header className="App-header">
                Floor Design App (Free not a scam)
            </header>
            <div className="app-drop-down" ref={dropdownRef}>
                <Button onClick={(e) => handleDropDownFocus(expanded)}>
                    Furniture
                </Button>
                {expanded && (
                    <ul>
                        <li className="Title">Bathtub</li>
                        <li>
                            <img
                                src={Bathtub}
                                width="40"
                                height="20"
                                alt="Bathtub"
                            />
                        </li>
                        <li className="Title">Coffee Table</li>
                        <li>
                            <img
                                src={CoffeeTable}
                                width="40"
                                height="20"
                                alt="CoffeeTable"
                            />
                        </li>
                        <li className="Title">Couch</li>
                        <li>
                            <img
                                src={Couch}
                                width="40"
                                height="20"
                                alt="Couch"
                            />
                        </li>
                        <li className="Title">Dinner Table</li>
                        <li>
                            <img
                                src={DinnerTable}
                                width="40"
                                height="30"
                                alt="Dinner Table"
                            />
                        </li>
                        <li className="Title">Double Bed</li>
                        <li>
                            <img
                                src={DoubleBed}
                                width="40"
                                height="30"
                                alt="Double Bed"
                            />
                        </li>
                        <li className="Title">Flat TV</li>
                        <li>
                            <img
                                src={FlatTV}
                                width="40"
                                height="30"
                                alt="Flat TV"
                            />
                        </li>
                        <li className="Title">Fridge</li>
                        <li>
                            <img
                                src={Fridge}
                                width="20"
                                height="40"
                                alt="Fridge"
                            />
                        </li>
                        <li className="Title">Lamp</li>
                        <li>
                            <img src={Lamp} width="30" height="30" alt="Lamp" />
                        </li>
                        <li className="Title">Plant</li>
                        <li>
                            <img
                                src={Plant}
                                width="30"
                                height="30"
                                alt="Plant"
                            />
                        </li>
                        <li className="Title">Single Bed</li>
                        <li>
                            <img
                                src={SingleBed}
                                width="40"
                                height="30"
                                alt="Single Bed"
                            />
                        </li>
                        <li className="Title">Sink</li>
                        <li>
                            <img src={Sink} width="40" height="30" alt="Sink" />
                        </li>
                        <li className="Title">Stove</li>
                        <li>
                            <img
                                src={Stove}
                                width="40"
                                height="30"
                                alt="Stove"
                            />
                        </li>
                        <li className="Title">Toilet</li>
                        <li>
                            <img
                                src={Toilet}
                                width="40"
                                height="30"
                                alt="Toilet"
                            />
                        </li>
                        <li className="Title">Rectangle Table</li>
                        <li>
                            <img
                                src={RectTable}
                                width="40"
                                height="30"
                                alt="Rectangle Table"
                            />
                        </li>
                        <li className="Title">Round Sink</li>
                        <li>
                            <img
                                src={RoundSink}
                                width="40"
                                height="30"
                                alt="Round Sink"
                            />
                        </li>
                        <li className="Title">Round Table</li>
                        <li>
                            <img
                                src={RoundTable}
                                width="40"
                                height="40"
                                alt="Round Table"
                            />
                        </li>
                        <li className="Title">Square Sink</li>
                        <li>
                            <img
                                src={SquareSink}
                                width="40"
                                height="30"
                                alt="Square Sink"
                            />
                        </li>
                        <li className="Title">Chair</li>
                        <li>
                            <img
                                src={Chair}
                                width="40"
                                height="30"
                                alt="Chair"
                            />
                        </li>
                    </ul>
                )}
            </div>
            <div
                style={{ backgroundImage: `url(${Floor1})` }}
                className="container"
            ></div>
        </div>
    );
}

export default App;
