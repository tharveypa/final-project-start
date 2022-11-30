import type { FC } from "react";
import React from "react";
import { Container } from "./Container";

export interface ExampleProps {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const Example: FC<ExampleProps> = ({ x, y, width, height }) => {
    return (
        <div>
            <Container
                hideSourceOnDrag={true}
                x={x}
                y={y}
                width={width}
                height={height}
            />
        </div>
    );
};

export default Example;
