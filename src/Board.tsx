import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";
import { Col, Row } from "react-bootstrap";

export const renderPiece = (
    x: number,
    y: number,
    pic: string,
    //addTool: () => void,
    [picX, picY]: [number, number]
) => {
    // if (x === picX && y === picY) {
    //addTool();
    return <Pic pic={pic} top={y} left={x} title={pic} />;
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
    tools: string[];
};

const Board: React.FC<BoardProps> = (props) => {
    const { tools } = props;
    const squares = [];
    //
    //let i=0;
    //pics.map((p:string)=>( ));
    //squares.push(renderSquare(0, picPosition, pics));
    //for (let i = 0; i < 2; i++) {
    squares.push(renderSquare(0, 0, tools));
    // for (let j = 0; j < 2; j++) {
    //     squares.push(renderSquare(j, i, tools));
    // }
    //}

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
                >
                    {/* hey */}
                    {/* <Row>
                        <Col>{squares[0]}</Col>
                        <Col>{squares[1]}</Col>
                    </Row> */}
                    {squares[0]}
                    <div>
                        Choose a pic
                        {tools.map(
                            // eslint-disable-next-line no-extra-parens

                            (p: string): JSX.Element => (
                                <Pic
                                    key={p}
                                    pic={p}
                                    top={0}
                                    left={0}
                                    title={p}
                                />
                            )
                        )}
                    </div>
                </div>
            </DndProvider>
        </>
    );
};

export default Board;
