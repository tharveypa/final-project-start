export interface Bathtub {
    png: number;
    id: string;
    name: "bathtub";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface Chair {
    id: string;
    name: "chair";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface CoffeTable {
    id: string;
    name: "coffetable";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface Couch {
    id: string;
    name: "couch";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface DinnerTable {
    id: string;
    name: "dinnertable";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface DoubleBed {
    id: string;
    name: "doublebed";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface FlatTV {
    id: string;
    name: "flattv";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface Fridge {
    id: string;
    name: "fridge";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface Lamp {
    id: string;
    name: "lamp";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface Plant {
    id: string;
    name: "plant";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface RectangleTable {
    id: string;
    name: "rectangletable";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface RoundSink {
    id: string;
    name: "roundsink";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface RoundTable {
    id: string;
    name: "roundtable";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface SingleBed {
    id: string;
    name: "singlebed";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface SquareSink {
    id: string;
    name: "squaresink";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface Stove {
    id: string;
    name: "stove";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export interface Toilet {
    id: string;
    name: "toilet";
    height: number;
    width: number;
    top: number;
    left: number;
    color: string;
    image?: File;
    price: number;
}

export type Furniture =
    | Bathtub
    | Chair
    | CoffeTable
    | Couch
    | DinnerTable
    | DoubleBed
    | FlatTV
    | Fridge
    | Lamp
    | Plant
    | RectangleTable
    | RoundSink
    | RoundTable
    | SquareSink
    | Stove
    | Toilet;
