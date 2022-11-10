import React from "react";
import "./App.css";
import { CardList } from "./Components/CardList";
import { Card } from "./Components/Card";

function App(): JSX.Element {
    return (
        <div>
            <CardList></CardList>
            <Card
                title="Title0"
                description="Title0 is a test card!"
                priority="1"
                thumbColor="red"
            ></Card>
        </div>
    );
}

export default App;
