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
                    position: "relative",
                    top: "100px",
                    left: "500px",
                    width: "1000px",
                    height: "600px",
                    border: "1px solid gray"
                }}
            >
                <Board
                    picPosition={picPosition}
                    width={25}
                    height={25}
                    numSquares={3}
                />
            </div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
