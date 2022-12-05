import React from "react";
import { render } from "react-dom";
import { Example } from "./Example";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <div
                    style={{
                        position: "absolute",
                        left: "43%"
                    }}
                >
                    <span>Team 4: Traveler Map Planner</span>
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: "40%",
                        top: "25px"
                    }}
                >
                    <span>Zachariah Barraza, Tavon Gage, Michael King</span>
                </div>
                <div style={{ position: "absolute", left: "23%", top: "50px" }}>
                    <img
                        src={require("./worldmap2.png")}
                        alt="oops mad no load teehee"
                        height={750}
                        width={1200}
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        left: "23%",
                        top: "50px",
                        height: "750px",
                        width: "1200px"
                    }}
                >
                    <Example />
                </div>
            </DndProvider>
        </div>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
