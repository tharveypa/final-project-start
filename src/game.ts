/* eslint-disable prefer-const */
import { PROTEIN_LIST, FRUIT_LIST } from "./data/foodList";
/* eslint-disable @typescript-eslint/no-unused-vars */
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
/**test */
export const movePic = (toX: number, toY: number) => {
    picPosition = [toX, toY];
    //picPosition = [toX, toY];
    emitChange();
};

export const canMovePic = (toX: number, toY: number) => {
    // const [x, y] = picPosition;
    // const dx = toX - x;

    // return Math.abs(dx) === 1;
    if (toX === PROTEIN_LIST.length) {
        return true;
    } else {
        return false;
    }
};
