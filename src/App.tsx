/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ElementList from "./components/ElementList";
import { Example } from "./components/Example";

import "./App.css";
function App(): JSX.Element {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <div className="row">
                    <div className="column-game">
                        <ElementList></ElementList>
                    </div>
                    <div className="column-game">
                        <Example></Example>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
