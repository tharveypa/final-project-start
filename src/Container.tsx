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
    fishes: { [key: string]: { top: number; left: number } };
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
    }>({});

    const addFish = () => {
        console.log("inside");
        const tankWidth = document.getElementById("tank")?.offsetWidth;
        const tankHeight = document.getElementById("tank")?.offsetHeight;
        const numFish = Object.keys(fishes).length;
        if (tankHeight !== undefined && tankWidth !== undefined) {
            const fishWidth = (height / 100) * tankWidth;
            const fishHeight = (height / 100) * tankHeight;
            //Math.random() *
            const top = Math.floor(tankHeight - fishHeight);
            const left = Math.floor(tankWidth - fishWidth);
            const idVal = (numFish + 1).toString();
            const newFish = { left: left, top: top };
            setFishes(
                update(fishes, { $set: { ...fishes, [idVal]: newFish } })
            );
        } else {
            console.log("undefined");
        }
    };

    const moveFish = useCallback(
        (id: number, left: number, top: number) => {
            const tankWidth = document.getElementById("tank")?.offsetWidth;
            const tankHeight = document.getElementById("tank")?.offsetHeight;
            if (tankWidth !== undefined && tankHeight !== undefined) {
                const fishWidth = (height / 100) * tankWidth;
                const fishHeight = (height / 100) * tankHeight;
                if (
                    left + fishWidth < tankWidth &&
                    left > 0 &&
                    top + fishHeight < tankHeight &&
                    top > 0
                ) {
                    setFishes(
                        update(fishes, {
                            [id]: {
                                $merge: { left, top }
                            }
                        })
                    );
                } else {
                    addFish();
                }
            }
        },
        [fishes, setFishes]
    );

    // put else on line 68 that says if fish is moved out of tank and into another tank,
    //delete the fish in this tank and put it into the other tank

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.FISH,
            drop(item: DragItem, monitor) {
                const delta =
                    monitor.getDifferenceFromInitialOffset() as XYCoord;
                const left = Math.round(item.left + delta.x);
                const top = Math.round(item.top + delta.y);
                moveFish(item.id, left, top);
                return;
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
            id={"tank"}
            style={{
                height: height.toString() + "%",
                width: width.toString() + "%",
                border: "1px solid black",
                position: "absolute"
            }}
            onClick={addFish}
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
                        id={parseInt(key)}
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
