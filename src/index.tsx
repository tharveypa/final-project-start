import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Button } from "react-bootstrap";

observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <header>
                <img className="logo" src={require("./logo.png")}></img>
                <Button> </Button>
            </header>
            <div className="row">
                <div className="column" style={{ width: "20%" }}>
                    <h2>Column 2</h2>
                    <p>Some text..</p>
                </div>
                <div
                    className="column"
                    style={{ width: "80%" }}
                    // style={{
                    //     position: "sticky",
                    //     top: "20%",
                    //     right: "10%",
                    //     bottom: "10%",
                    //     left: "10%",
                    //     zIndex: 1,
                    //     border: "1px solid gray"
                    // }}
                    // className="column"
                >
                    <Board picPosition={picPosition} />
                </div>
            </div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
