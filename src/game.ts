/* eslint-disable prefer-const */
// import { Food } from "./Interfaces/food";
// /* eslint-disable @typescript-eslint/no-unused-vars */
// let picPosition = [0, 0];

// let observer: ((arg0: number[]) => void) | null = null;

// const emitChange = () => {
//     observer && observer(picPosition);
// };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const observe = (o: any) => {
//     if (observer) {
//         throw new Error("Multiple observers not implemented.");
//     }

//     observer = o;
//     emitChange();
// };
// /**test */
// export const movePic = (toX: number, toY: number) => {
//     picPosition = [toX, toY];
//     emitChange();
// };

// export const canMovePic = (
//     toX: number,
//     toY: number,
//     currentFoodList: Food[]
// ) => {
//     if (toX === currentFoodList.length) {
//         return true;
//     } else {
//         return false;
//     }
// };
export {};
