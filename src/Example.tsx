import type { FC, MutableRefObject } from "react";
import React from "react";
import { Container } from "./Container";

export interface ExampleProps {
    x: number;
    y: number;
    width: number;
    height: number;
    incFish: () => void;
    decFish: () => void;
    numFish: number;
    deleteThisFish: [number, number];
    delFishX: MutableRefObject<number>;
    delFishID: MutableRefObject<number>;
    setDeleteVal: (x: number, id: string) => void;
    resetDeleteVal: () => void;
    renderDeleteVal: () => void;
}

export const Example: FC<ExampleProps> = ({
    x,
    y,
    width,
    height,
    incFish,
    decFish,
    numFish,
    deleteThisFish,
    delFishX,
    delFishID,
    setDeleteVal,
    resetDeleteVal,
    renderDeleteVal
}) => {
    return (
        <div>
            <Container
                hideSourceOnDrag={true}
                x={x}
                y={y}
                width={width}
                height={height}
                incFish={incFish}
                decFish={decFish}
                numFish={numFish}
                deleteThisFish={deleteThisFish}
                delFishX={delFishX}
                delFishID={delFishID}
                setDeleteVal={setDeleteVal}
                resetDeleteVal={resetDeleteVal}
                renderDeleteVal={renderDeleteVal}
            />
        </div>
    );
};

export default Example;
