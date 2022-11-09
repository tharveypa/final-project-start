import React, { MouseEvent, MouseEventHandler, useState } from "react";
import "./App.css";
import Board from "./Board";
import GridEdit from "./GridEdit";
import "./background.css";
import ImageDownload from "./ImageDownload";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Pic from "./Pic";

type BoardProps = {
    picPosition: [number, number];
};

const App: React.FC<BoardProps> = (props): JSX.Element => {
    const [xSize, setXSize] = useState<number>(5);
    const [ySize, setYSize] = useState<number>(5);
    const [pan, setPan] = useState<boolean>(false);

    const changeXSize = (x: number) => setXSize(x);
    const changeYSize = (y: number) => setYSize(y);

    /* Working on middle mouse panning
    const handleMiddleDown = (event: React.MouseEvent) => {
        if (event.button === 1) {
            setPan(true);
        }
    };

    const handleMiddleUp = (event: React.MouseEvent) => {
        if (event.button === 1) {
            setPan(false);
        }
    };

     disabled: !pan, 

    onMouseDown={handleMiddleDown}
    onMouseUp={handleMiddleUp}
    */
    return (
        <div className="App">
            <header className="App-header">Table Top Map Editor</header>
            <ImageDownload></ImageDownload>
            <GridEdit changeX={changeXSize} changeY={changeYSize}></GridEdit>
            <TransformWrapper panning={{ activationKeys: ["Shift"] }}>
                <TransformComponent>
                    <div
                        className="container"
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
