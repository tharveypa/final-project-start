import type { Bed, Desk, Wardrobe, Dresser, Rug } from "./types";

const bed: Bed = {
    id: "menu-bed",
    name: "bed",
    height: 150,
    width: 150,
    bunk: false,
    top: 0,
    left: 0
};

const desk: Desk = {
    id: "menu-desk",
    name: "desk",
    height: 150,
    width: 150,
    top: 0,
    left: 0
};

const wardrobe: Wardrobe = {
    id: "menu-wardrobe",
    name: "wardrobe",
    height: 150,
    width: 150,
    top: 0,
    left: 0
};

const dresser: Dresser = {
    id: "menu-dresser",
    name: "dresser",
    height: 150,
    width: 150,
    top: 0,
    left: 0
};

const rug: Rug = {
    id: "menu-rug",
    name: "rug",
    height: 150,
    width: 150,
    color: "red",
    top: 0,
    left: 0
};

export const furniture = [bed, desk, wardrobe, dresser, rug];
