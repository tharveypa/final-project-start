import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Bathtub from "../src/furniture/bathtub.png";
import CoffeeTable from "../src/furniture/coffee_table.png";
import Couch from "../src/furniture/couch.png";
import DinnerTableB from "../src/furniture/dinner_table_B.png";
import DinnerTableG from "../src/furniture/dinner_table_G.png";
import DinnerTableR from "../src/furniture/dinner_table_R.png";
import DinnerTable from "../src/furniture/dinner_table.png";
import DoubleBed from "../src/furniture/double_bed.png";
import FlatTV from "../src/furniture/flat_tv.png";
import Fridge from "../src/furniture/fridge.png";
import Lamp from "../src/furniture/lamp.png";
import Plant from "../src/furniture/plant.png";
import SingleBed from "../src/furniture/single_bed.png";
import Sink from "../src/furniture/sink.png";
import Stove from "../src/furniture/stove.png";
import Toilet from "../src/furniture/toilet.png";

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
                        <li>
                            Bathtub
                            <img
                                src={Bathtub}
                                width="40"
                                height="20"
                                alt="Bathtub"
                            />
                        </li>
                        <li>
                            Coffee Table
                            <img
                                src={CoffeeTable}
                                width="40"
                                height="20"
                                alt="CoffeeTable"
                            />
                        </li>
                        <li>
                            Couch
                            <img
                                src={Couch}
                                width="40"
                                height="20"
                                alt="Couch"
                            />
                        </li>
                        <li>
                            Dinner Table
                            <img
                                src={DinnerTable}
                                width="40"
                                height="30"
                                alt="Dinner Table"
                            />
                        </li>
                        <li>
                            Double Bed
                            <img
                                src={DoubleBed}
                                width="40"
                                height="30"
                                alt="Double Bed"
                            />
                        </li>
                        <li>
                            Flat TV
                            <img
                                src={FlatTV}
                                width="40"
                                height="30"
                                alt="Flat TV"
                            />
                        </li>
                        <li>
                            Fridge
                            <img
                                src={Fridge}
                                width="20"
                                height="40"
                                alt="Fridge"
                            />
                        </li>
                        <li>
                            Lamp
                            <img src={Lamp} width="30" height="30" alt="Lamp" />
                        </li>
                        <li>
                            Plant
                            <img
                                src={Plant}
                                width="30"
                                height="30"
                                alt="Plant"
                            />
                        </li>
                        <li>
                            Single Bed
                            <img
                                src={SingleBed}
                                width="40"
                                height="30"
                                alt="Single Bed"
                            />
                        </li>
                        <li>
                            Sink
                            <img src={Sink} width="40" height="30" alt="Sink" />
                        </li>
                        <li>
                            Stove
                            <img
                                src={Stove}
                                width="40"
                                height="30"
                                alt="Stove"
                            />
                        </li>
                        <li>
                            Toilet
                            <img
                                src={Toilet}
                                width="40"
                                height="30"
                                alt="Toilet"
                            />
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default App;
