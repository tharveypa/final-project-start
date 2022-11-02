import React from "react";
import "./App.css";
import { Note } from "./components/Note";
import { CorkBoard } from "./components/CorkBoard";

const sampleCorkBoard = [
    {
        task: {
            title: "fred",
            description: "also fred",
            pritority: "high",
            thumbColor: "red"
        },
        id: 1,
        height: 50,
        width: 75,
        top: 60,
        left: 60,
        zIndex: 1
    },
    {
        task: {
            title: "burt",
            description: "also burt",
            pritority: "low",
            thumbColor: "green"
        },
        id: 2,
        height: 80,
        width: 80,
        top: 20,
        left: 20,
        zIndex: 0
    }
];

function App(): JSX.Element {
    return (
        <div className="App">
            <div
                style={{
                    height: "600px",
                    width: "800px",
                    left: "800px",
                    top: "50px",
                    position: "absolute"
                }}
            >
                <CorkBoard
                    startingNotesAndPositionInfo={sampleCorkBoard}
                ></CorkBoard>
            </div>
        </div>
    );
}

export default App;
