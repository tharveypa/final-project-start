/* eslint-disable no-extra-parens */
import React from "react";
import "./App.css";
import Board from "./Board";

function App(): JSX.Element {
    return (
        <div className="App">
            <Board picPosition={[0, 0]}></Board>
        </div>
    );
}

export default App;
