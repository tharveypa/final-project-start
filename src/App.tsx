import React from "react";
import "./App.css";
import { CardList } from "./CardList";
import { Card } from "./Card"

//import { CardList } from "./CardList"

function App(): JSX.Element {
    return (
        <div>
            <CardList></CardList>
            <Card></Card>
        </div>
    );
}

export default App;
