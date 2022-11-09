import React from "react";
import "./App.css";
import { CardList } from "./Components/CardList";
import { Card } from "./Components/Card";

//import { CardList } from "./CardList"

function App(): JSX.Element {
    return (
        <div>
            <CardList></CardList>
            <Card
                title="TestTitle"
                description="TestDes"
                priority="1"
                thumbColor="blue"
            ></Card>
        </div>
    );
}

export default App;
