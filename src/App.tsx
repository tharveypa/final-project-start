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

const App: React.FC = (): JSX.Element => {
    const [xSize, setXSize] = useState<number>(5);
    const [ySize, setYSize] = useState<number>(5);
    const [tiles, setTiles] = useState<tileItem[]>([]);
    const [scale, setScale] = useState<number>(1);
    const [sourceTile /*setSourceTile*/] = useState<tileItem[]>([
        {
            id: -1,
            position: [0, 0],
            color: "red",
            tags: ["inside", "furniture"],
            snap: "snap",
            src: "./images/barrel.jpg"
        },
        {
            id: -2,
            position: [0, 0],
            color: "green",
            tags: ["inside", "furniture"],
            snap: "snap",
            src: "./images/woodFloor.jpg"
        },
        {
            id: -3,
            position: [0, 0],
            color: "yellow",
            tags: ["inside", "outside", "food"],
            snap: "snap",
            src: "./images/burger.jpg"
        },
        {
            id: -4,
            position: [0, 0],
            color: "blue",
            tags: ["outside", "plants", "road"],
            snap: "snap",
            src: "./images/bushes.jpg"
        },
        {
            id: -5,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "light"],
            snap: "snap",
            src: "./images/candle.jpg"
        },
        {
            id: -6,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "furniture"],
            snap: "snap",
            src: "./images/window.jpg"
        },
        {
            id: -7,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "furniture"],
            snap: "snap",
            src: "./images/chair.jpg"
        },
        {
            id: -8,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "outside", "storage"],
            snap: "snap",
            src: "./images/chest.jpg"
        },
        {
            id: -9,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "inside", "plants"],
            snap: "snap",
            src: "./images/Chrysanthemum.jpg"
        },
        {
            id: -10,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "cracks"],
            snap: "snap",
            src: "./images/cracks.jpg"
        },
        {
            id: -11,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "outside", "furniture"],
            snap: "snap",
            src: "./images/crate.jpg"
        },
        {
            id: -12,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "plants"],
            snap: "snap",
            src: "./images/tree.jpg"
        },
        {
            id: -13,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "outside", "furniture"],
            snap: "snap",
            src: "./images/door.jpg"
        },
        {
            id: -14,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "decoration"],
            snap: "snap",
            src: "./images/flag.jpg"
        },
        {
            id: -15,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "furniture"],
            snap: "snap",
            src: "./images/floor.jpg"
        },
        {
            id: -16,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "outside", "coin"],
            snap: "snap",
            src: "./images/goldCoin.jpg"
        },
        {
            id: -17,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "plants", "road"],
            snap: "snap",
            src: "./images/grass.jpg"
        },
        {
            id: -18,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "plants"],
            snap: "snap",
            src: "./images/greenTree.jpg"
        },
        {
            id: -19,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "stone"],
            snap: "snap",
            src: "./images/hugeStone.jpg"
        },
        {
            id: -20,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "item"],
            snap: "snap",
            src: "./images/paper.jpg"
        },
        {
            id: -21,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "outside", "food"],
            snap: "snap",
            src: "./images/pasta.jpg"
        },
        {
            id: -22,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "road"],
            snap: "snap",
            src: "./images/path.jpg"
        },
        {
            id: -23,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "item"],
            snap: "snap",
            src: "./images/pen.jpg"
        },
        {
            id: -24,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "outside", "furniture"],
            snap: "snap",
            src: "./images/pillar.jpg"
        },
        {
            id: -25,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "outside", "food"],
            snap: "snap",
            src: "./images/pizza.jpg"
        },
        {
            id: -26,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "outside", "plants"],
            snap: "snap",
            src: "./images/redFlowers.jpg"
        },
        {
            id: -27,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "stone"],
            snap: "snap",
            src: "./images/rocks.png"
        },
        {
            id: -28,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "stone"],
            snap: "snap",
            src: "./images/stone.jpg"
        },
        {
            id: -29,
            position: [-100, -100],
            color: "cyan",
            tags: ["inside", "outside", "furniture"],
            snap: "snap",
            src: "./images/table.jpg"
        },
        {
            id: -30,
            position: [-100, -100],
            color: "cyan",
            tags: ["outside", "road"],
            snap: "snap",
            src: "./images/topPath.jpg"
        }
    ]);
    const deleteTile = (index: number) => {
        setTiles(tiles.filter((tile: tileItem): boolean => tile.id !== index));
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
                                    />
                                </div>
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                    <div className="list">
                        <ListOb
                            tiles={sourceTile}
                            deleteTile={deleteTile}
                        ></ListOb>
                    </div>
                </DndProvider>
            </div>
        </div>
    );
};

export default App;
