import React, { useRef, useState, useEffect } from "react";
import { Style } from "util";
import { Button } from "react-bootstrap";
import "./App.css";
import Moveable from "moveable";
import bathtub from "../src/furniture/bathtub.png";
import box from "../src/furniture/box.png";
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

    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    const isClicked = useRef<boolean>(false);

    const coords = useRef<{
        startX: number;
        startY: number;
        lastX: number;
        lastY: number;
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef.current || !containerRef.current) return;

        const box = boxRef.current;
        const container = containerRef.current;

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };

        const onMouseUp = (e: MouseEvent) => {
            isClicked.current = false;
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked.current) return;

            const nextX =
                e.clientX - coords.current.startX + coords.current.lastX;
            const nextY =
                e.clientY - coords.current.startY + coords.current.lastY;

            box.style.top = `${nextY}px`;
            box.style.left = `${nextX}px`;
        };

        box.addEventListener("mousedown", onMouseDown);
        box.addEventListener("mouseup", onMouseUp);
        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseUp);

        const cleanup = () => {
            box.removeEventListener("mousedown", onMouseDown);
            box.removeEventListener("mouseup", onMouseUp);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseUp);
        };

        return cleanup();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                Floor Design App (Free not a scam)
            </header>
            <div className="app-drop-down">Furniture</div>
            <div ref={containerRef} className="container">
                <div draggable="true" ref={boxRef} className="bathtub"></div>
            </div>
        </div>
    );
}

export default App;
