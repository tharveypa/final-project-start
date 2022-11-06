import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
//import Dndarr from "./components/dndarr";
import { FilterDropdown, SortDropdown } from "./components/dropdown";
import { Row, Col } from "react-bootstrap";

observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <div
                style={{
                    width: window.innerWidth, //originally "500px"
                    height: window.innerHeight,
                    border: "1px solid gray"
                }}
            >
                <h1> Harleen Chahal </h1>
                <hr></hr>
                <Row style={{ height: "700px" }}>
                    <Col>
                        <Board picPosition={picPosition} />
                    </Col>
                    <Col>
                        <FilterDropdown
                            filterOptions={["Kitchen", "Bathroom", "Bedroom"]}
                        ></FilterDropdown>
                        <SortDropdown
                            sortOptions={[
                                "Alphabetical",
                                "Tile Type",
                                "Design Type"
                            ]}
                        ></SortDropdown>
                    </Col>
                </Row>
                <hr></hr>
            </div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
