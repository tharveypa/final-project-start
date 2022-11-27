import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { PopUpSlider } from "./PopUpSlider";
import Lucario from "./Pokemon/Lucario";
import Charizard from "./Pokemon/Charizard";
import Bulbasaur from "./Pokemon/Bulbasaur";
import Snorlax from "./Pokemon/Snorlax";

ReactDOM.render(
    <>
        <div>
            <h3 style={{ textAlign: "center" }}>Welcome to Poke Team Design</h3>
            <PopUpSlider></PopUpSlider>
        </div>
        <hr></hr>
        <React.StrictMode>
            <div className="container" style={{ textAlign: "center" }}>
                <Charizard />
                <Bulbasaur />
                <Lucario />
                <Snorlax />
            </div>
        </React.StrictMode>
    </>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
