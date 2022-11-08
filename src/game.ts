let picPosition: [number, number] = [0, 0];
let observer: ((arg0: [number, number]) => void) | null = null;

const emitChange = () => {
    observer && observer(picPosition);
};

export const observe = (o: (t: [number, number]) => void) => {
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
