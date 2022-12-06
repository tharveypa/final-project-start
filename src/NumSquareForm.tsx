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
    const [numFish, setNumFish] = useState(0);
    const incFish = () => {
        setNumFish(numFish + 1);
    };

    const decFish = () => {
        setNumFish(numFish - 1);
    };
    const [tank_ID, setTank_ID] = useState(
        Array(numSquares).fill(Array(0).fill(null))
    );
    const addFishToID = (x: number, id: string) => {
        const newTank = [...tank_ID];
        for (let i = 0; i < tank_ID.length; i++) {
            newTank[i] = [...tank_ID[i]];
        }
        const pushedTank = newTank.map((thisTank: number[]) =>
            newTank.indexOf(thisTank) === x
                ? [...thisTank, parseInt(id)]
                : thisTank
        );
        setTank_ID(pushedTank);
    };
    return (
        <div>
            <div>
                <Form.Group
                    controlId="numSquareForm"
                    style={{
                        position: "fixed",
                        width: "130px",
                        right: "2%",
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
                    position: "fixed",
                    bottom: "10%",
                    right: "2%",
                    width: "70%",
                    height: "80%",
                    border: "2px solid black",
                    backgroundColor: "gray"
                }}
            >
                <Board
                    picPosition={picPosition}
                    numSquares={numSquares}
                    tank_ID={tank_ID}
                    addFishToID={addFishToID}
                    numFish={numFish}
                    decFish={decFish}
                    incFish={incFish}
                />
            </div>
        </div>
    );
}

export default NumSquareForm;
