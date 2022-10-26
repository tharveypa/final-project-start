let picPosition = [0, 0];
let observer: ((arg0: number[]) => void) | null = null;

const emitChange = () => {
    observer && observer(picPosition);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const canMovePic = (toX: number, toY: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [x, y] = picPosition;
    const dx = toX - x;

    return Math.abs(dx) === 1;
};
