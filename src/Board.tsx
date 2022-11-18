/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from "react";
import Pic from "./Pic";
import BoardSquare from "./BoardSquare";
import { tileItem } from "./interfaces";
import { ItemTypes } from "./constants";
import { useDragLayer, useDrop, DropTarget } from "react-dnd";

const renderPiece = (x: number, y: number, tiles: tileItem[]) => {
    const location = tiles.filter(
        (o: tileItem): boolean =>
            x === o.position[0] && y === o.position[1] && o.snap === "snap"
    );
    if (location.length > 0) {
        return <Pic tile={location[0]} />;
    }
};

const renderFree = (tiles: tileItem[]): tileItem[] =>
    tiles.filter((o: tileItem): boolean => o.snap === "free");
const renderSquare = (
    x: number,
    y: number,
    tiles: tileItem[],
    changeTile: (
        index: number,
        location: [number, number],
        color: string,
        tags: string[],
        snap: string,
        src: string
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
        snap: string,
        src: string
    ) => void;
    x: number;
    y: number;
};

const Board: React.FC<BoardProps> = (props) => {
    const squares = [];
    const [coords, setCoords] = useState<[number, number]>([0, 0]);
    const board = document.getElementById("board");
    const test = renderFree(props.tile);

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.free,
        canDrop: () => true,
        drop: (item: { type: string; tile: tileItem }, monitor) =>
            props.changeTile(
                item.tile.id,
                [monitor.getClientOffset().x, monitor.getClientOffset().y],
                item.tile.color,
                item.tile.tags,
                item.tile.snap,
                item.tile.src
            ),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    });

    const { itemtype, isDragging, item, initalOffset, currentOffset } =
        useDragLayer((monitor) => ({
            item: monitor.getItem(),
            itemtype: monitor.getItemType(),
            initalOffset: monitor.getClientOffset(),
            currentOffset: monitor.getClientOffset(),
            isDragging: monitor.isDragging()
        }));

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
            id="board"
            ref={drop}
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexWrap: "wrap"
            }}
        >
            {squares}
            {coords}
            {test.map((o: tileItem) => {
                return (
                    <div
                        key={o.id}
                        z-index="10"
                        style={{
                            position: "absolute",
                            left: o.position[0],
                            top: o.position[1]
                        }}
                    >
                        <Pic tile={o} />
                    </div>
                );
            })}
        </div>
    );
};

export default Board;
