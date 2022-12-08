import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

observe((picPosition: [number, number]) => {
    //const arr: string[] = ["goofy", "AAh"];
    ReactDOM.render(
        <React.StrictMode>
            <div
                style={{
                    width: "1250px",
                    height: "100px",
                    border: "1px solid gray"
                }}
            >
                <App />
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
            </div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});
//vic was here
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
