import type { Bed, Desk, Wardrobe, Dresser, Rug } from "./types";

const bed: Bed = {
    id: "menu-bed",
    name: "bed",
    height: 38 * 3,
    width: 80 * 3,
    bunk: false,
    top: 0,
    left: 0,
    color: "cadetblue"
};

const desk: Desk = {
    id: "menu-desk",
    name: "desk",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    color: "chocolate"
};

const wardrobe: Wardrobe = {
    id: "menu-wardrobe",
    name: "wardrobe",
    height: 24.5 * 3,
    width: 36 * 3,
    top: 0,
    left: 0,
    color: "deeppink"
};

const dresser: Dresser = {
    id: "menu-dresser",
    name: "dresser",
    height: 20 * 3,
    width: 30 * 3,
    top: 0,
    left: 0,
    color: "darkslateblue"
};

const rug: Rug = {
    id: "menu-rug",
    name: "rug",
    height: 50 * 3,
    width: 150 * 3,
    color: "coral",
    top: 0,
    left: 0
};

export const furniture = [bed, desk, wardrobe, dresser, rug];
