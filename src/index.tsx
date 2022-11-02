import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";

observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <div
                style={{
                    position: "absolute",
                    left: "43%"
                }}
            >
                <span>Team 4: Traveler Map Planner</span>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: "40%",
                    top: "20px"
                }}
            >
                <span>Zachariah Barraza, Tavon Gage, Micheal King</span>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "20px",
                    width: "350px",
                    height: "900px",
                    border: "1px solid gray"
                }}
            >
                <Board picPosition={picPosition} />
            </div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
