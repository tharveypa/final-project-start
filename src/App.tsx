import React, { /*MouseEvent,*/ useState } from "react";
import "./App.css";
import Board from "./Board";
import GridEdit from "./GridEdit";
import "./background.css";
import ImageDownload from "./ImageDownload";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { observeItem } from "./interfaces";
import ListOb from "./ListOb";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const App: React.FC = (): JSX.Element => {
    const [xSize, setXSize] = useState<number>(5);
    const [ySize, setYSize] = useState<number>(5);
    const [objects, setObjects] = useState<observeItem[]>([]);

    const changeObject = (index: number, location: [number, number]) => {
        if (index < 0) {
            setObjects((oldArray) => [
                ...oldArray,
                { id: oldArray.length, position: location }
            ]);
        } else {
            setObjects(
                objects.map((o: observeItem): observeItem => {
                    if (o.id === index) {
                        return { ...o, position: location };
                    } else {
                        return o;
                    }
                })
            );
        }
    };
    //const [pan, setPan] = useState<boolean>(false);

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
            <header className="App-header">
                Table Top Map Editor for CISC275
            </header>
            <div>Justin Clavette</div>
            <ImageDownload></ImageDownload>
            <GridEdit changeX={changeXSize} changeY={changeYSize}></GridEdit>
            <div className="fullgridpage">
                <DndProvider backend={HTML5Backend}>
                    <TransformWrapper
                        wheel={{ activationKeys: ["Shift"] }}
                        panning={{ activationKeys: ["Shift"] }}
                    >
                        <TransformComponent>
                            <div
                                className="grid"
                                id="map"
                                style={{
                                    border: "1px solid gray"
                                }}
                            >
                                <Board
                                    object={objects}
                                    changeObject={changeObject}
                                    x={xSize}
                                    y={ySize}
                                />
                            </div>
                        </TransformComponent>
                    </TransformWrapper>
                    <div>
                        <ListOb></ListOb>
                    </div>
                </DndProvider>
            </div>
        </div>
    );
};

export default App;
