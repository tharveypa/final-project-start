import { BoxMap } from "./BoxMap";
import { Furniture } from "./furniture";

export interface RoomStatus {
    [key: string]: {
        name: string;
        FurnitureInRoom: Furniture[];
        furnitures: BoxMap;
        roomWidth: string;
        roomHeight: string;
    };
}
