import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Board from "./Board";
import "./index.css";
import { observe } from "./game";
import reportWebVitals from "./reportWebVitals";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Vehicle } from "./vehicle";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
observe((picPosition: [number, number]) => {
    ReactDOM.render(
        <React.StrictMode>
            <div className="App">
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
            <div
                style={{
                    width: "500px",
                    height: "500px",
                    border: "1px solid gray"
                }}
            >
                <Board picPosition={picPosition} />
            </div>
        </React.StrictMode>,
        document.getElementById("root")
    );
});

function App() {
    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    const isClicked = useRef<boolean>(false);

    const coords = useRef<{
        startX: number;
        startY: number;
        lastX: number;
        lastY: number;
    }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef.current || !containerRef.current) return;

        const box = boxRef.current;
        const container = containerRef.current;

        const onMouseDown = (e: MouseEvent) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onMouseUp = (e: MouseEvent) => {
            isClicked.current = false;
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isClicked.current) return;

            const nextX =
                e.clientX - coords.current.startX + coords.current.lastX;
            const nextY =
                e.clientY - coords.current.startY + coords.current.lastY;

            box.style.top = `${nextY}px`;
            box.style.left = `${nextX}px`;
        };

        box.addEventListener("mousedown", onMouseDown);
        box.addEventListener("mouseup", onMouseUp);
        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseUp);

        const cleanup = () => {
            box.removeEventListener("mousedown", onMouseDown);
            box.removeEventListener("mouseup", onMouseUp);
            container.removeEventListener("mousemove", onMouseMove);
            container.removeEventListener("mouseleave", onMouseUp);
        };

        return cleanup;
    }, []);

    return (
        <main>
            <div ref={containerRef} className="container">
                <div ref={boxRef} className="box"></div>
            </div>
        </main>
    );
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
