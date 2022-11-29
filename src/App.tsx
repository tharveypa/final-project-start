import React, { /*MouseEvent,*/ useState } from "react";
import "./App.css";
import Board from "./Board";
import GridEdit from "./GridEdit";
import "./background.css";
import ImageDownload from "./ImageDownload";
import {
    TransformWrapper,
    TransformComponent,
    ReactZoomPanPinchRef
} from "react-zoom-pan-pinch";
import { tileItem } from "./interfaces";
import ListOb from "./ListOb";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import TileEdit from "./TileEdit";

const App: React.FC = (): JSX.Element => {
    const [xSize, setXSize] = useState<number>(5);
    const [ySize, setYSize] = useState<number>(5);
    const [tiles, setTiles] = useState<tileItem[]>([]);
    const [scale, setScale] = useState<number>(1);
    const [middleClick, setMiddleClick] = useState<boolean>(false);
    const [selectTile, setSelectTile] = useState<tileItem | null>(null);
    const [sourceTile /*setSourceTile*/] = useState<tileItem[]>([
        {
            id: -1,
            position: [0, 0],
            color: "red",
            tags: [],
            snap: "snap",
            src: "./images/bosun_tally.jpg"
        },
        {
            id: -2,
            position: [0, 0],
            color: "green",
            tags: [],
            snap: "snap",
            src: "./images/bosun_tally.jpg"
        },
        {
            id: -3,
            position: [0, 0],
            color: "yellow",
            tags: [],
            snap: "snap",
            src: "./images/bosun_tally.jpg"
        },
        {
            id: -4,
            position: [0, 0],
            color: "blue",
            tags: [],
            snap: "snap",
            src: "./images/bosun_tally.jpg"
        },
        {
            id: -5,
            position: [-100, -100],
            color: "cyan",
            tags: [],
            snap: "free",
            src: "./images/rocks.png"
        }
    ]);
    const deleteTile = (index: number) => {
        setTiles(tiles.filter((tile: tileItem): boolean => tile.id !== index));
    };

    const resetMiddle = () => {
        setMiddleClick(false);
    };

    const updateSelectTile = (tile: tileItem) => {
        setSelectTile(tile);
        setMiddleClick(true);
    };

    const changeTile = (
        index: number,
        location: [number, number],
        color: string,
        tags: string[],
        snap: string,
        src: string
    ) => {
        if (index < 0) {
            setTiles((oldArray) => [
                ...oldArray,
                {
                    id: oldArray.length,
                    position: location,
                    color: color,
                    tags: tags,
                    snap: snap,
                    src: src
                }
            ]);
        } else {
            setTiles(
                tiles.map((o: tileItem): tileItem => {
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
            <div>Wenhan Ying</div>
            <div>Junnan Bai</div>
            <ImageDownload></ImageDownload>
            <GridEdit changeX={changeXSize} changeY={changeYSize}></GridEdit>
            <div className="dndpage">
                <DndProvider backend={HTML5Backend}>
                    <div className="fullgrid">
                        <TransformWrapper
                            wheel={{ activationKeys: ["Shift"] }}
                            panning={{ activationKeys: ["Shift"] }}
                            onZoom={(ref: ReactZoomPanPinchRef) =>
                                setScale(ref.state.scale)
                            }
                        >
                            <TransformComponent>
                                <div
                                    className="grid"
                                    id="map"
                                    style={{
                                        border: "1px solid gray",
                                        width: 80 + "vw",
                                        height: 80 * (ySize / xSize) + "vw"
                                    }}
                                >
                                    <Board
                                        tile={tiles}
                                        changeTile={changeTile}
                                        x={xSize}
                                        y={ySize}
                                        scale={scale}
                                        updateSelectTile={updateSelectTile}
                                    />
                                </div>
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                    <div className="rightbar">
                        {(!middleClick && (
                            <ListOb
                                tiles={sourceTile}
                                deleteTile={deleteTile}
                                updateSelectTile={updateSelectTile}
                            ></ListOb>
                        )) ||
                            (middleClick && (
                                <TileEdit
                                    tile={selectTile}
                                    tileList={tiles}
                                    resetMiddle={resetMiddle}
                                />
                            ))}
                    </div>
                </DndProvider>
            </div>
        </div>
    );
};

export default App;
