import React from "react";
import { Menu } from "./Components/Menu";
import "./App.css";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <Col>
                <Menu></Menu>
            </Col>
        </div>
    );
}

export default App;
