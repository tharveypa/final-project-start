//import Pic from "./Pic";

const picPosition = [
    [0, 0],
    [1, 0]
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

export const addPic = (toX: number, toY: number) => {
    picPosition[0] = [toX, toY];

    emitChange();
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
    return Math.abs(dx - dy) === 1;
};
