import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Col, Container, Row } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Vehicle } from "./vehicle";
import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface boxProps {
    position: number;
    setPosition: (newPositon: number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <div className="App">
                <App></App>
                <header className="App-header">
                    Parking Management System
                </header>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div
                                    style={{
                                        border: "1px solid blue",
                                        padding: "4px",
                                        width: "20%",
                                        height: "1cm",
                                        background: "white"
                                    }}
                                >
                                    Total Parking Revenue:
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>First Column</p>
                                <div
                                    style={{
                                        border: "1px solid blue",
                                        padding: "4px",
                                        width: "100%",
                                        height: "10cm",
                                        background: "gray"
                                    }}
                                >
                                    Parking lots
                                </div>
                                <div
                                    style={{
                                        border: "1px solid blue",
                                        padding: "4px",
                                        width: "4cm",
                                        height: "1.5cm",
                                        background: "White"
                                    }}
                                >
                                    <ul>
                                        <li>Vehicle Type:</li>
                                        <li>Parking Fee:</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <p>Second Column</p>
                                <Row>
                                    <div
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "15%",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Class One
                                    </div>
                                    <div
                                        id="Sedan"
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "1.5cm",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Sedan
                                    </div>
                                    <div
                                        id="SUV"
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "1.5cm",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        SUV
                                    </div>
                                </Row>
                                <Row>
                                    <div
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "15%",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Class Two
                                    </div>
                                    <div
                                        id="Van"
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "3cm",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Van
                                    </div>
                                    <div
                                        id="Limousine"
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "3cm",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Limousine
                                    </div>
                                </Row>
                                <Row>
                                    <div
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "15%",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Class Three
                                    </div>
                                    <div
                                        id="Bus"
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "4.5cm",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Bus
                                    </div>
                                    <div
                                        id="Truck"
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "4.5cm",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Truck
                                    </div>
                                </Row>
                                <Row>
                                    <div
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "15%",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Class Four
                                    </div>
                                    <div
                                        id="Articulated Bus"
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "6cm",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Articulated Bus
                                    </div>
                                    <div
                                        id="Heavy Truck"
                                        style={{
                                            border: "1px solid blue",
                                            padding: "4px",
                                            width: "6cm",
                                            height: "1cm",
                                            background: "White"
                                        }}
                                    >
                                        Heavy Truck
                                    </div>
                                </Row>
                                <Row>
                                    <Col>
                                        <div
                                            style={{
                                                border: "1px solid blue",
                                                padding: "4px",
                                                width: "5cm",
                                                height: "1.5cm",
                                                background: "White"
                                            }}
                                        >
                                            Service
                                        </div>
                                        <div
                                            id="Jump Starts"
                                            style={{
                                                border: "1px solid blue",
                                                padding: "4px",
                                                width: "4cm",
                                                height: "1.5cm",
                                                background: "White"
                                            }}
                                        >
                                            Jump Starts
                                        </div>
                                        <div
                                            id="Lockout Service"
                                            style={{
                                                border: "1px solid blue",
                                                padding: "4px",
                                                width: "4cm",
                                                height: "1.5cm",
                                                background: "White"
                                            }}
                                        >
                                            Lockout Service
                                        </div>
                                        <div
                                            id="Emergency Fuel Assistance"
                                            style={{
                                                border: "1px solid blue",
                                                padding: "4px",
                                                width: "4cm",
                                                height: "1.5cm",
                                                background: "White"
                                            }}
                                        >
                                            Emergency Fuel Assistance
                                        </div>
                                        <div
                                            id="Tire Inflation"
                                            style={{
                                                border: "1px solid blue",
                                                padding: "4px",
                                                width: "4cm",
                                                height: "1.5cm",
                                                background: "White"
                                            }}
                                        >
                                            Tire Inflation
                                        </div>
                                    </Col>
                                    <Col>
                                        <div
                                            style={{
                                                border: "1px solid blue",
                                                padding: "4px",
                                                width: "10cm",
                                                height: "10cm",
                                                background: "White"
                                            }}
                                        >
                                            Pay to Park
                                            <ul>
                                                <li>
                                                    Up to 15 minutes - No Charge
                                                    (Use 15-minute spaces)
                                                </li>
                                                <li>Up to 1 hour $3.00</li>
                                                <li>Up to 2 hours $5.00</li>
                                                <li>Up to 2 1/2 hours $7.00</li>
                                                <li>Up to 3 1/2 hours $9.00</li>
                                                <li>
                                                    Over 3 1/2 to 24 hours
                                                    $11.00
                                                </li>
                                                <li>
                                                    Friday, Saturday, and Sunday
                                                    daily max. of $7.00
                                                </li>
                                                <li>
                                                    Failure to Pay Kiosk
                                                    Citation = $30.00 per day
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            {/* <div
                style={{
                    width: "500px",
                    height: "500px",
                    border: "1px solid gray"
                }}
            >
                <Board picPosition={picPosition} />
            </div> */}
        </React.StrictMode>,
        document.getElementById("root")
    );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
