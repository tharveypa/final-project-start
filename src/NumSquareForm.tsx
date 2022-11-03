import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Board from "./Board";

interface NumSquareFormProps {
    picPosition: [number, number];
}

export function NumSquareForm({
    picPosition
}: NumSquareFormProps): JSX.Element {
    const [numSquares, setNumSquares] = useState(12);
    return (
        <div>
            <div>
                <Form.Group
                    controlId="numSquareForm"
                    style={{
                        position: "absolute",
                        width: "130px",
                        right: "5%",
                        bottom: "3%"
                    }}
                >
                    <Form.Label>Number of Tanks:</Form.Label>
                    <Form.Control
                        type="number"
                        value={numSquares}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setNumSquares(parseInt(event.target.value))}
                    />
                </Form.Group>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "25%",
                    width: "70%",
                    height: "80%",
                    border: "2px solid black",
                    backgroundColor: "gray"
                }}
            >
                <Board picPosition={picPosition} numSquares={numSquares} />
            </div>
        </div>
    );
}

export default NumSquareForm;
