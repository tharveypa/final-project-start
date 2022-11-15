import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./styles/App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row>
                        <Col>
                            <img
                                src={require("./images/UDormLogo.png")}
                                width="150"
                                height="100"
                            />
                        </Col>
                        <Col>
                            <Button style={{ marginTop: "60px" }}>Home</Button>
                        </Col>
                        <Col>
                            <Button style={{ marginTop: "60px" }}>
                                Create New Room
                            </Button>
                        </Col>
                        <Col>
                            <Button style={{ marginTop: "60px" }}>
                                View My Rooms
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}
export default App;
