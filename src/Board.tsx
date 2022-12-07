import React from "react";
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
<<<<<<< HEAD
=======
                {/* | board squares x={x}-{picPosition[0]}, y={y}-{picPosition[1]} */}
>>>>>>> 8088512cff19cdcf7b202a4039303f3b1a85ee6d
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
<<<<<<< HEAD
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
=======
                >
                    {/* hey */}
                    {/* {squares} */}
                </div>

                <div>
                    {/* Choose a pic */}
                    <ul>
                        {pics.map(
                            // eslint-disable-next-line no-extra-parens
                            (p: string): JSX.Element => (
                                <li key={p}>
                                    <Pic pic={p} />
                                </li>
                            )
                        )}
                    </ul>
                </div>
>>>>>>> 8088512cff19cdcf7b202a4039303f3b1a85ee6d
            </DndProvider>
        </>
    );
};

export default Board;
