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
    addFishToID: (x: number, id: string) => void;
    removeFishNotInTank: (x: number, id: string) => void;
}

export const Example: FC<ExampleProps> = ({
    x,
    y,
    width,
    height,
    incFish,
    decFish,
    numFish,
    addFishToID,
    removeFishNotInTank
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
                addFishToID={addFishToID}
                removeFishNotInTank={removeFishNotInTank}
            />
        </div>
    );
};

export default Example;
