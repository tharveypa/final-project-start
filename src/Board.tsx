import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import { Col, Row } from "react-bootstrap";
import CarSquare from "./components/CarSquare";
import PimpVsDestroy from "./components/PimpVsDestroy";

export const renderPiece = (
    x: number,
    y: number,
    pic: string,
    [picX, picY]: [number, number]
) => {
    if (x === picX && y === picY) {
        //addTool();
        return <Pic pic={pic} top={y} left={x} title={pic} />;

        // return <CarSquare pic={pic} />;
    }
};

const renderSquare = (j: number, i: number, pics: string[]) => {
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
                {/* | board squares x={x}-{picPosition[0]}, y={y}-{picPosition[1]} */}
                <div key={i} style={{ width: "300px", height: "300px" }}>
                    <BoardSquare x={x} y={y} toolery={pics}>
                        {
                            //renderPiece(x, y, "yeet", picPosition)
                        }
                    </BoardSquare>
                </div>
            </div>
        </>
    );
};

type BoardProps = {
    tools: string[];
};
const Board: React.FC<BoardProps> = (props) => {
    const { tools } = props;
    const squares = [];
    //squares.push(renderSquare(0, picPosition, pics));
    //for (let i = 0; i < 2; i++) {
    squares.push(renderSquare(0, 0, tools));
    // for (let j = 0; j < 2; j++) {
    //     squares.push(renderSquare(j, i, tools));
    //squares.push(renderSquare(0, 0, pics, picPosition));
    // for (let i = 0; i < 2; i++) {
    //     for (let j = 0; j < 1; j++) {
    //         squares.push(renderSquare(j, i, pics, picPosition));
    //     }
    // }

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
                            <Pic key={p} pic={p} top={0} left={0} title={p} />
                        )
                    )}
                </div> */}
                {squares}
            </DndProvider>
        </>
    );
};

export default Board;
