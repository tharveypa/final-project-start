/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
let picPosition = [0, 0];
let observer: ((arg0: number[]) => void) | null = null;

const emitChange = () => {
    observer && observer(picPosition);
};

export const observe = (o: any) => {
    if (observer) {
        throw new Error("Multiple observers not implemented.");
    }

    observer = o;
    emitChange();
};

export const movePic = (toX: number, toY: number) => {
    picPosition = [toX, toY];
    emitChange();
};

export const canMovePic = (toX: number, toY: number) => {
    const [x, y] = picPosition;
    const dx = toX - x;

    return Math.abs(dx) === 1;
};
