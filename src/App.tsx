/* eslint-disable no-extra-parens */
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
import { SortingItems } from "./Sorting";
import tileList from "./images/tileList";

const App: React.FC = (): JSX.Element => {
    const [xSize, setXSize] = useState<number>(5);
    const [ySize, setYSize] = useState<number>(5);
    const [tiles, setTiles] = useState<tileItem[]>([]);
    const [scale, setScale] = useState<number>(1);
    const [middleClick, setMiddleClick] = useState<boolean>(false);
    const [selectTile, setSelectTile] = useState<tileItem | null>(null);
    const [sourceTile, setSourceTile] = useState<tileItem[]>(tileList);

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

    const updateTile = (tile: tileItem) => {
        setTiles(
            tiles.map((o: tileItem): tileItem => {
                if (o.id === tile.id) {
                    return tile;
                } else {
                    return o;
                }
            })
        );
    };

    const changeXSize = (x: number) => setXSize(x);
    const changeYSize = (y: number) => setYSize(y);

    return (
        <div className="App">
            <header className="App-header">
                Table Top Map Editor for CISC275
            </header>
            <div>Justin Clavette</div>
            <div>Wenhan Ying</div>
            <div>Junnan Bai</div>
            <ImageDownload></ImageDownload>
            <SortingItems
                setSourceTile={setSourceTile}
                sourceTile={sourceTile}
            ></SortingItems>
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
                                    updateTile={updateTile}
                                />
                            ))}
                    </div>
                </DndProvider>
            </div>
        </div>
    );
};

export default App;
