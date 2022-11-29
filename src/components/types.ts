export interface Bed {
    id: string;
    name: "bed";
    bunk: boolean;
    height: number;
    width: number;
    top: number;
    left: number;
}

export interface Desk {
    id: string;
    name: "desk";
    top: number;
    height: number;
    width: number;
    left: number;
}

export interface Wardrobe {
    id: string;
    name: "wardrobe";
    height: number;
    width: number;
    top: number;
    left: number;
}

export interface Dresser {
    id: string;
    name: "dresser";
    height: number;
    width: number;
    top: number;
    left: number;
}

export interface Rug {
    id: string;
    name: "rug";
    height: number;
    width: number;
    color: string;
    top: number;
    left: number;
}

export interface Microwave {
    id: string;
    name: "microwave";
    height: number;
    width: number;
    top: number;
    left: number;
}

export interface LaundryBasket {
    id: string;
    name: "Laundry Basket";
    height: number;
    width: number;
    top: number;
    left: number;
}

export interface TrashCan {
    id: string;
    name: "Trash Can";
    height: number;
    width: number;
    top: number;
    left: number;
}

export interface Fridge {
    id: string;
    name: "fridge";
    height: number;
    width: number;
    top: number;
    left: number;
}

export type Furniture =
    | Bed
    | Desk
    | Wardrobe
    | Dresser
    | Rug
    | Microwave
    | LaundryBasket
    | TrashCan
    | Fridge;
