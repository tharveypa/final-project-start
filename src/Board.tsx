import React from "react";
import Pic from "./Pic";
import BoardSquare from "./BoardSquare";
import { tileItem } from "./interfaces";

const renderPiece = (x: number, y: number, tile: tileItem[]) => {
    const location = tile.filter(
        (o: tileItem): boolean => x === o.position[0] && y === o.position[1]
    );
    if (location.length > 0) {
        return <Pic tile={location[0]} />;
    }
};

const renderSquare = (
    x: number,
    y: number,
    tiles: tileItem[],
    changeTile: (
        index: number,
        location: [number, number],
        color: string,
        tags: string[],
        snap: string
    ) => void,
    width: number,
    height: number
) => {
    return (
        <div
            className="square"
            key={((x + y) * (x + y + 1)) / 2 + x}
            style={{ width: 100 / width + "%", height: 100 / height + "%" }}
        >
            <BoardSquare x={x} y={y} changeTile={changeTile}>
                {renderPiece(x, y, tiles)}
            </BoardSquare>
        </div>
    );
};

type BoardProps = {
    tile: tileItem[];
    changeTile: (
        index: number,
        location: [number, number],
        color: string,
        tags: string[],
        snap: string
    ) => void;
    x: number;
    y: number;
};

const Board: React.FC<BoardProps> = (props) => {
    const squares = [];

    for (let i = 0; i < props.y; i++) {
        for (let j = 0; j < props.x; j++) {
            squares.push(
                renderSquare(
                    j,
                    i,
                    props.tile,
                    props.changeTile,
                    props.x,
                    props.y
                )
            );
        }
    }

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexWrap: "wrap"
            }}
        >
            {squares}
        </div>
    );
};

export default Board;
