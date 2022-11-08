import React, { useState } from "react";
import "./App.css";
import Board from "./Board";
import GridEdit from "./GridEdit";
import "./background.css";
import ImageDownload from "./ImageDownload";
import { Color } from "./components/color";
import { Orientation } from "./components/orientation";
import { Position } from "./components/position";
import { Size } from "./components/size";
import { Tages } from "./components/tages";
import { Texture } from "./components/texture";
import { Type } from "./components/type";

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
            <ImageDownload></ImageDownload>
            <GridEdit changeX={changeXSize} changeY={changeYSize}></GridEdit>
            <div
                className="container"
                id="map"
                style={{
                    width: "1000px",
                    height: "1000px",
                    border: "1px solid gray"
                }}
            >
                <Board picPosition={props.picPosition} x={xSize} y={ySize} />
            </div>
            <Color></Color>
            <Orientation></Orientation>
            <Position></Position>
            <Size></Size>
            <Tages></Tages>
            <Texture></Texture>
            <Type></Type>
        </div>
    );
};

export default App;
