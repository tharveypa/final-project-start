import { FC, MutableRefObject } from "react";
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
    incFish: () => void;
    decFish: () => void;
    numFish: number;
    deleteThisFish: [number, number];
    setDeleteVal: (x: number, id: string) => void;
    resetDeleteVal: () => void;
    delFishX: MutableRefObject<number>;
    delFishID: MutableRefObject<number>;
    renderDeleteVal: () => void;
}

export const Container: FC<ContainerProps> = ({
    hideSourceOnDrag,
    x,
    width,
    height,
    incFish,
    decFish,
    numFish,
    setDeleteVal,
    delFishX,
    delFishID
}) => {
    const [fishes, setFishes] = useState(Array(0).fill(Array(0).fill(null)));
    const newFishes = [...fishes];
    let index = -1;
    let bool_delete = false;
    for (let i = 0; i < fishes.length; i++) {
        newFishes[i] = [...fishes[i]];
    }
    for (let i = 0; i < fishes.length; i++) {
        if (fishes[i][0] === delFishID.current) {
            bool_delete = true;
            index = i;
        }
    }
    console.log("Rerender?" + delFishX.current + bool_delete);
    if (delFishX.current !== x && bool_delete) {
        console.log("deleteX inside delete", delFishX.current);
        console.log("deleteID inside delete", delFishID.current);
        console.log("delete index", index);
        console.log("fishes before", fishes, "x", 0);
        setFishes(fishes.splice(index, 1));
        console.log("fishes after", fishes);
        index = -1;
        bool_delete = false;
        delFishX.current = -1;
        delFishID.current = -1;
    }
    const addFish = () => {
        console.log("inside add fish");
        const tankWidth = document.getElementById("tank")?.offsetWidth;
        const tankHeight = document.getElementById("tank")?.offsetHeight;
        const newFishes = [...fishes];
        for (let i = 0; i < fishes.length; i++) {
            newFishes[i] = fishes[i];
        }
        if (tankHeight !== undefined && tankWidth !== undefined) {
            const fishWidth = (height / 100) * tankWidth;
            const fishHeight = (height / 100) * tankHeight;
            const top = Math.floor(tankHeight - fishHeight);
            const left = Math.floor(tankWidth - fishWidth);
            const newFish = [numFish, left, top];
            newFishes.push(newFish);
            setFishes(newFishes);
            incFish();
        } else {
            console.log("undefined");
        }
    };

    const addFishNewTank = (id: number, left: number, top: number) => {
        console.log("inside add fish new tank");
        const tankWidth = document.getElementById("tank")?.offsetWidth;
        const tankHeight = document.getElementById("tank")?.offsetHeight;
        if (tankHeight !== undefined && tankWidth !== undefined) {
            let leftAdjusted = 0;
            let topAdjusted = 0;
            if (left < 0) {
                leftAdjusted = tankWidth + (left % tankWidth);
            } else if (left > 0) {
                leftAdjusted = left % tankWidth;
            }
            if (top < 0) {
                topAdjusted = tankHeight + (top % tankHeight);
            } else if (top > 0) {
                topAdjusted = top % tankHeight;
            }
            const newFishes = [...fishes];
            for (let i = 0; i < fishes.length; i++) {
                newFishes[i] = fishes[i];
            }
            const idVal = id.toString();
            const newFish = [id, leftAdjusted, topAdjusted];
            newFishes.push(newFish);
            setFishes(newFishes);
            setDeleteVal(x, idVal);
            console.log("deleteX after set", delFishX.current);
            console.log("deleteID after set", delFishID.current);
        }
    };

    const moveFish = useCallback(
        (id: number, left: number, top: number, name: number) => {
            const tankWidth = document.getElementById("tank")?.offsetWidth;
            const tankHeight = document.getElementById("tank")?.offsetHeight;
            const newFishes = [...fishes];
            for (let i = 0; i < fishes.length; i++) {
                newFishes[i] = fishes[i];
            }
            if (tankWidth !== undefined && tankHeight !== undefined) {
                const fishWidth = (height / 100) * tankWidth;
                const fishHeight = (height / 100) * tankHeight;
                if (
                    left + fishWidth < tankWidth &&
                    left > 0 &&
                    top + fishHeight < tankHeight &&
                    top > 0
                ) {
                    newFishes[id] = [name, left, top];
                    setFishes(newFishes);
                } else {
                    addFishNewTank(name, left, top);
                    incFish();
                    decFish();
                }
            }
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
                const name = item.name;
                moveFish(item.id, left, top, name);
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
            data-testId={"tank"}
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
            {fishes.map((thisFish: [number, number, number]) => {
                const left = thisFish[1];
                const top = thisFish[2];
                const id = thisFish[0];
                return (
                    <Fish
                        key={fishes.indexOf(thisFish)}
                        id={fishes.indexOf(thisFish)}
                        name={id}
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
