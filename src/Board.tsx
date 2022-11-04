import React, { useState } from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";

const renderPiece = (
    x: number,
    y: number,
    //addTool: () => void,
    [picX, picY]: [number, number]
) => {
    // pic: string
    if (x === picX && y === picY) {
        //addTool();
        return <Pic pic={"Yeet"} />;
    }
};

const renderSquare = (
    i: number,
    picPosition: [number, number],
    ps: string[]
) => {
    const x = 0;
    const y = i;

    // const [tool, setTool] = useState<number>(0);

    // function moreTools(): void {
    //     setTool(tool + 1);
    //     // tool;
    // }

    return (
        <>
            <div>
                | board squares x={x}-{picPosition[0]}, y={y}-{picPosition[1]}
                <div key={i} style={{ width: "50%", height: "50%" }}>
                    <BoardSquare x={x} y={y}>
                        {
                            //
                            renderPiece(x, y, picPosition)
                        }
                    </BoardSquare>
                </div>
            </div>
        </>
    );
};

type BoardProps = {
    pics: string[];
    picPosition: [number, number];
};

const Board: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    const { pics } = props;
    const squares = [];
    //let i=0;
    //pics.map((p:string)=>(
    //));
    //squares.push(renderSquare(0, picPosition, pics));
    for (let i = 0; i < 2; i++) {
        squares.push(renderSquare(i, picPosition, pics));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: "200%",
                    height: "100%",
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                hey
                {squares}
            </div>
            <div>
                Choose a pic
                <ul>
                    {pics.map(
                        (p: string): JSX.Element => (
                            <li key={p}>
                                <Pic pic={p} />
                            </li>
                        )
                    )}
                </ul>
            </div>
        </DndProvider>
    );
};

export default Board;
