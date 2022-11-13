import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
// import { DropDown } from "./DropDown";
//  import { Form, Row } from "react-bootstrap";
import { EditMode } from "./PopUpSlider";

observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <>
            <div>
                <h3 style={{ textAlign: "center" }}>
                    Welcome to Poke Team Design
                </h3>
                <EditMode></EditMode>
            </div>
            <hr></hr>
            <React.StrictMode>
                <div
                    style={{
                        width: "1500px",
                        height: "500px",
                        border: "1px solid gray"
                    }}
                >
                    <Board picPosition={picPosition} />
                </div>
                <p>hi</p>
            </React.StrictMode>
        </>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
