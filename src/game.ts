import Tank from "./interfaces/Tank";

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

export const canMovePic = (toX: number, toY: number, tank: Tank) => {
    return tank.salt === false && tank.pred === false;
};
