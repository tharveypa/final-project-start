import React from "react";
import "./App.css";
import PimpVsDestroy from "./components/PimpVsDestroy";
//import Car from "./components/Car";
import CarSpace from "./components/CarSpace";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <PimpVsDestroy></PimpVsDestroy>
            <div>
                <CarSpace color={"red"} clean={true} tirefill={true}></CarSpace>
            </div>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

        </div>
    );
}

export default App;
