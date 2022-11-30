/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import { CustomDragLayer } from "./CustomDragLayer";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
//import { Dropdown } from "./components/dropdown";
//import Dndarr from "./components/dndarr";
import { FilterDropdown, SortDropdown } from "./components/dropdown";
import { Row, Col } from "react-bootstrap";
import App from "./App";

observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <App></App>
        </React.StrictMode>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
