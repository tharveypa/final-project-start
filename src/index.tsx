import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

//const arr: string[] = ["goofy", "AAh"];
ReactDOM.render(
    <React.StrictMode>
        <div
            style={{
                width: "100%",
                height: "100%",
                border: "1px solid gray"
            }}
        >
            {/* <Board
                pics={[
                    "Wipe Car",
                    "Shine Car",
                    "Fill Tires",
                    "Repair Windows",
                    "etc"
                ]}
                picPosition={picPosition}
            /> */}
            <App />
            {/* x={picPosition[0]}
                y={picPosition[1]} */}
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);

//vic was here
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
