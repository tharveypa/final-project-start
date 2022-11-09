import { observeItem } from "./interfaces";

let picPosition: observeItem[];
let observer: ((arg0: observeItem[]) => void) | null = null;
let objectCount = 0;

const emitChange = () => {
    observer && observer(picPosition);
};

export const observe = (o: (t: observeItem[]) => void) => {
    if (observer) {
        throw new Error("Multiple observers not implemented.");
    }

    observer = o;
    emitChange();
};

export const movePic = (index: number, toX: number, toY: number) => {
    const itemChange: observeItem = { position: [toX, toY] };

    if (objectCount < index) {
        picPosition.push(itemChange);
    } else {
        picPosition[index] = itemChange;
        objectCount++;
    }

    emitChange();
};
