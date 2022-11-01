import React from "react";
import "./App.css";
import { Note } from "./components/Note";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Note></Note>
        </div>
    );
}

export default App;
