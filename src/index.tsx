import React, { useState } from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";

observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <h1
                className="text-center"
                style={{
                    fontStyle: "Bold",
                    fontFamily: "Impact",
                    fontSize: "80px"
                }}
            >
                FISHDOM
            </h1>
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "25%",
                    width: "70%",
                    height: "80%",
                    border: "2px solid black",
                    backgroundColor: "gray"
                }}
            >
                <Board picPosition={picPosition} numSquares={12} />
            </div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
