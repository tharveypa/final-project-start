export interface Bed {
    id: string;
    name: "Blue Bed" | "Red Bed" | "Yellow Bed";
    bunk: boolean;
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export interface Desk {
    id: string;
    name: "Desk";
    top: number;
    height: number;
    width: number;
    left: number;
    color: string;
}

export interface Wardrobe {
    id: string;
    name: "Wardrobe";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export interface Dresser {
    id: string;
    name: "Dresser";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export interface Rug {
    id: string;
    name:
        | "Small Orange Rug"
        | "Medium Orange Rug"
        | "Large Orange Rug"
        | "Small Blue Rug"
        | "Medium Blue Rug"
        | "Large Blue Rug";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export interface Microwave {
    id: string;
    name: "Microwave";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export interface LaundryBasket {
    id: string;
    name: "Laundry Basket";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export interface TrashCan {
    id: string;
    name: "Trash Can";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
}

export interface Fridge {
    id: string;
    name: "Fridge";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
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
