import React, { useState } from "react";
import "./App.css";
import Board from "./Board";
import GridEdit from "./GridEdit";

type BoardProps = {
    picPosition: [number, number];
};

const App: React.FC<BoardProps> = (props): JSX.Element => {
    const [xSize, setXSize] = useState<number>(5);
    const [ySize, setYSize] = useState<number>(5);

    const changeXSize = (x: number) => setXSize(x);
    const changeYSize = (y: number) => setYSize(y);

    return (
        <div className="App">
            <header className="App-header">Table Top Map Editor</header>
            <GridEdit changeX={changeXSize} changeY={changeYSize}></GridEdit>
            <div
                style={{
                    width: "1000px",
                    height: "1000px",
                    border: "1px solid gray"
                }}
            >
                <Board picPosition={props.picPosition} x={xSize} y={ySize} />
            </div>
        </div>
    );
};

export default App;
