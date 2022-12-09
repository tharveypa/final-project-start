/* eslint-disable @typescript-eslint/no-unused-vars */
//import Pic from "./Pic";
import { renderPiece } from "./Board";
const picPosition = [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1]
];
let observer: ((arg0: number[]) => void) | null = null;

const emitChange = () => {
    observer && observer(picPosition[0]);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const observe = (o: any) => {
    if (observer) {
        throw new Error("Multiple observers not implemented.");
    }

    observer = o;
    emitChange();
};

export const addPic = (toX: number, toY: number, p: number) => {
    picPosition[p] = [toX, toY];
    //emitChange();
    return renderPiece(toY, toY, "POOP", [toX, toY]);
};

export const canAddPic = (toX: number, toY: number) => {
    const [x, y] = picPosition[0];
    const dx = toX - x;
    const dy = toY - y;
    return dx !== 0 || dy !== 0;
};

export const movePic = (toX: number, toY: number) => {
    picPosition[0] = [toX, toY];
    emitChange();
};

export const canMovePic = (toX: number, toY: number) => {
    const [x, y] = picPosition[0];
    const dx = toX - x;
    const dy = toY - y;
    return true;
};
