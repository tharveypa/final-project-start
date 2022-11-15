export interface Bed {
    name: "bed";
    dimensions: number[];
    bunk: boolean;
    position: number[];
}

export interface Desk {
    name: "desk";
    dimensions: number[];
    position: number[];
}
export interface Wardrobe {
    name: "wardrobe";
    dimensions: number[];
    position: number[];
}

export interface Dresser {
    name: "dresser";
    dimensions: number[];
    position: number[];
}

export interface Rug {
    name: "rug";
    dimensions: number[];
    position: number[];
    color: string;
}

export interface Microwave {
    name: "microwave";
    dimensions: number[];
    position: number[];
}

export interface LaundryBasket {
    name: "Laundry Basket";
    dimensions: number[];
    position: number[];
}

export interface TrashCan {
    name: "Trash Can";
    dimensions: number[];
    position: number[];
}

export interface Fridge {
    name: "fridge";
    dimensions: number[];
    position: number[];
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
