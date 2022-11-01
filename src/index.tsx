import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import { Dropdown } from "./components/dropdown";

observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <div
                style={{
                    width: window.innerWidth, //originally "500px"
                    height: window.innerHeight,
                    border: "1px solid gray"
                }}
            >
                <Board picPosition={picPosition} />
                <hr></hr>
                <Dropdown
                    filterOptions={["Kitchen", "Bathroom", "Bedroom"]}
                ></Dropdown>
                <hr></hr>
            </div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
