import React, { useState } from "react";
import "./App.css";
import Board from "./Board";
import GridEdit from "./GridEdit";
import ImageDownload from "./ImageDownload";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
            <TransformWrapper panning={{ activationKeys: ["a"] }}>
                <TransformComponent>
                    <div
                        id="map"
                        style={{
                            width: "1000px",
                            height: "1000px",
                            border: "1px solid gray"
                        }}
                    >
                        <Board
                            picPosition={props.picPosition}
                            x={xSize}
                            y={ySize}
                        />
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};

export default App;
