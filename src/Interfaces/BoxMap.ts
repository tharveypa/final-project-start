import { Furniture } from "./furniture";
export interface BoxMap {
    [key: string]: {
        top: number;
        left: number;
        FurnitureItem: Furniture;
    };
}
