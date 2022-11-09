import React from "react";
import "./App.css";
import PimpVsDestroy from "./components/PimpVsDestroy";
//import Car from "./components/Car";
//import DirtTool from "./components/Destroy Tools/DirtTool";
import CarSpace from "./components/CarSpace";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <PimpVsDestroy></PimpVsDestroy>
            <div>
                <CarSpace DirtPosition={[0, 0]}></CarSpace>
            </div>
        </div>
    );
}

export default App;
