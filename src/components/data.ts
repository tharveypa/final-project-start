import type { Bed, Desk, Wardrobe, Dresser, Rug } from "./types";

const bed: Bed = {
    name: "bed",
    dimensions: [40, 40, 40, 40],
    position: [0, 0],
    bunk: false
};

const desk: Desk = {
    name: "desk",
    dimensions: [40, 40, 40, 40],
    position: [0, 0]
};

const wardrobe: Wardrobe = {
    name: "wardrobe",
    dimensions: [40, 40, 40, 40],
    position: [0, 0]
};

const dresser: Dresser = {
    name: "dresser",
    dimensions: [40, 40, 40, 40],
    position: [0, 0]
};

const rug: Rug = {
    name: "rug",
    dimensions: [40, 40, 40, 40],
    position: [0, 0],
    color: "red"
};

export const furniture = [bed, desk, wardrobe, dresser, rug];
