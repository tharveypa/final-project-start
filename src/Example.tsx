import type { FC } from "react";
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
    setDeleteVal: (x: number, id: string) => void;
    resetDeleteVal: () => void;
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
    setDeleteVal,
    resetDeleteVal
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
                setDeleteVal={setDeleteVal}
                resetDeleteVal={resetDeleteVal}
            />
        </div>
    );
};

export default Example;
