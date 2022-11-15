import React from "react";
import "./App.css";
import { CardList } from "./components/CardList";
import { MakeNote } from "./components/MakeNote";
import { CorkBoard } from "./components/CorkBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Pic from "./Pic";
import { Card } from "./components/Card";
import { DeleteNote } from "./components/DeleteNote";
import CardComp from "./components/CardComp";

const sampleCorkBoard = [
    {
        task: {
            title: "fred",
            description: "also fred",
            priority: "high",
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
            priority: "low",
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
        <>
            <div>
                <CardList></CardList>
            </div>
            <DndProvider backend={HTML5Backend}>
                <div className="App">
                    <div>
                        <h3>CREATED BY: </h3>
                        <p>Blade Tyrrell, Brandon Branson, Michael Snead</p>
                    </div>
                    <div
                        style={{
                            height: "50px",
                            width: "50px",
                            left: "500px",
                            top: "50px",
                            position: "absolute"
                        }}
                    >
                        <Pic></Pic>
                    </div>
                    {/* CORKBOARD DIV : SIZE AND POSITION OF THE DIV DEFINES THAT OF THE CORKBOARD*/}
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
                        <MakeNote></MakeNote>
                        <DeleteNote></DeleteNote>
                    </div>
                </div>
            </DndProvider>
        </>
    );
}

export default App;
