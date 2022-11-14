import React from "react";
import ReactDOM from "react-dom";
//import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import PieceBank from "./PieceBank";
import { render } from "react-dom";
import { Dropper } from "./Dropper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Dropper />
            </DndProvider>
        </div>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
