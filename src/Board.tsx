import React, { useState } from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import CarSquare from "./components/CarSquare";
import PimpVsDestroy from "./components/PimpVsDestroy";

export const renderPiece = (
    x: number,
    y: number,
    pic: string,
    [picX, picY]: [number, number]
) => {
    if (x === picX && y === picY) {
        // return <CarSquare pic={pic} />;
    }
};

const renderSquare = (
    j: number,
    i: number,
    pics: string[],
    picPosition: [number, number]
) => {
    const x = j;
    const y = i;

    // const [tool, setTool] = useState<number>(0);

    // function moreTools(): void {
    //     setTool(tool + 1);
    //     // tool;
    // }

    return (
        <>
            <div>
                <div key={i} style={{ width: "50%", height: "50%" }}>
                    <BoardSquare x={x} y={y} pics={pics}></BoardSquare>
                    {
                        //each square needs 2 states
                        //image name
                        // --- saves tool name and displays string
                        //ifcandrop or empty
                        // --- boolean that doesnt allow 1 or more things to be dropped
                    }
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
    //pics.map((p:string)=>( ));
    //squares.push(renderSquare(0, 0, pics, picPosition));
    // for (let i = 0; i < 2; i++) {
    //     for (let j = 0; j < 1; j++) {
    //         squares.push(renderSquare(j, i, pics, picPosition));
    //     }
    // }
    squares.push(renderSquare(1, 2, pics, picPosition));

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div
                    style={{
                        width: "200%",
                        height: "100%",
                        display: "flex",
                        flexWrap: "wrap"
                    }}
                ></div>
                <PimpVsDestroy></PimpVsDestroy>
                {/* <div>
                    {pics.map(
                        (p: string): JSX.Element => (
                            <p key={p}>
                                <CarSquare pic={p} />
                            </p>
                        )
                    )}
                </div> */}
                {squares}
            </DndProvider>
        </>
    );
};

export default Board;
