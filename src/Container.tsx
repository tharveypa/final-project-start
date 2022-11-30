import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useState } from "react";
import type { XYCoord } from "react-dnd";
import { useDrop } from "react-dnd";
import React from "react";
import { Fish } from "./Fish";
import type { DragItem } from "./interfaces";
import { ItemTypes } from "./ItemTypes";
import Overlay from "./Overlay";

export interface ContainerProps {
    hideSourceOnDrag: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ContainerState {
    fishes: { [key: string]: { top: number; left: number; title: string } };
}

export const Container: FC<ContainerProps> = ({
    hideSourceOnDrag,
    x,
    width,
    height
}) => {
    const [fishes, setFishes] = useState<{
        [key: string]: {
            top: number;
            left: number;
        };
    }>({
        a: { top: 20, left: 80 },
        b: { top: 180, left: 20 }
    });

    const moveFish = useCallback(
        (id: string, left: number, top: number) => {
            setFishes(
                update(fishes, {
                    [id]: {
                        $merge: { left, top }
                    }
                })
            );
        },
        [fishes, setFishes]
    );

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.FISH,
            drop(item: DragItem, monitor) {
                const delta =
                    monitor.getDifferenceFromInitialOffset() as XYCoord;
                const left = Math.round(item.left + delta.x);
                const top = Math.round(item.top + delta.y);
                moveFish(item.id, left, top);
                return undefined;
            }
        }),
        [moveFish]
    );

    const salt = x % 2 === 1;
    const pred = x % 3 === 0;

    let tankPic = "";
    if (salt) {
        tankPic = "salt.png";
    } else {
        tankPic = "fresh.png";
    }
    return (
        <div
            ref={drop}
            style={{
                height: height.toString() + "%",
                width: width.toString() + "%",
                border: "1px solid black",
                position: "absolute"
            }}
        >
            <img
                src={require("./images/" + tankPic)}
                alt="tankPic"
                width="100%"
                height="100%"
            />
            {pred && <Overlay color="red" opacity={0.25} />}
            {Object.keys(fishes).map((key) => {
                const { left, top } = fishes[key] as {
                    top: number;
                    left: number;
                };
                return (
                    <Fish
                        key={key}
                        id={key}
                        left={left}
                        top={top}
                        hideSourceOnDrag={hideSourceOnDrag}
                        height={height}
                    ></Fish>
                );
            })}
        </div>
    );
};
