/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
    const [x] = picPosition;
    const dx = toX - x;

    return Math.abs(dx) === 1;
};
