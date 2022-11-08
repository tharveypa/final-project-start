import React from "react";
import Pic from "./Pic";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BankRectangle from "./BankRectangle";

const renderPiece = (x: number, y: number, [picX, picY]: [number, number]) => {
    if (x === picX && y === picY) {
        return <Pic />;
    }
};

const renderSquare = (i: number, picPosition: [number, number]) => {
    const x = i;
    const y = 0;

    return (
        <div key={i} style={{ width: "10%", height: "100%" }}>
            <BankRectangle x={x} y={y}>
                {renderPiece(x, y, picPosition)}
            </BankRectangle>
        </div>
    );
};

type BoardProps = {
    picPosition: [number, number];
};

const PieceBank: React.FC<BoardProps> = (props) => {
    const { picPosition } = props;
    const rectangle = [];
    for (let i = 0; i < 10; i++) {
        rectangle.push(renderSquare(i, picPosition));
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                {rectangle}
            </div>
        </DndProvider>
    );
};

export default PieceBank;
