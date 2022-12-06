import type { Bed, Desk, Wardrobe, Dresser, Rug, TrashCan } from "./types";

const blue_bed: Bed = {
    id: "menu-bed",
    name: "Blue Bed",
    height: 38 * 3,
    width: 80 * 3,
    bunk: false,
    top: 0,
    left: 0,
    color: "cadetblue"
};

const red_bed: Bed = {
    id: "menu-bed",
    name: "Red Bed",
    height: 38 * 3,
    width: 80 * 3,
    bunk: false,
    top: 0,
    left: 0,
    color: "red"
};

const desk: Desk = {
    id: "menu-desk",
    name: "Desk",
    height: 24 * 3,
    width: 42 * 3,
    top: 0,
    left: 0,
    color: "chocolate"
};

const wardrobe: Wardrobe = {
    id: "menu-wardrobe",
    name: "Wardrobe",
    height: 24.5 * 3,
    width: 36 * 3,
    top: 0,
    left: 0,
    color: "deeppink"
};

const dresser: Dresser = {
    id: "menu-dresser",
    name: "Dresser",
    height: 20 * 3,
    width: 30 * 3,
    top: 0,
    left: 0,
    color: "darkslateblue"
};

const trash_can: TrashCan = {
    id: "menu-trash_can",
    name: "Trash Can",
    height: 15 * 3,
    width: 20 * 3,
    top: 0,
    left: 0,
    color: "grey"
};

const small_rug: Rug = {
    id: "menu-rug",
    name: "Rug",
    height: 50 * 3,
    width: 75 * 3,
    color: "coral",
    top: 0,
    left: 0
};

const medium_rug: Rug = {
    id: "menu-rug",
    name: "Rug",
    height: 65 * 3,
    width: 125 * 3,
    color: "coral",
    top: 0,
    left: 0
};

const large_rug: Rug = {
    id: "menu-rug",
    name: "Rug",
    height: 75 * 3,
    width: 150 * 3,
    color: "coral",
    top: 0,
    left: 0
};

export const furniture = [
    blue_bed,
    red_bed,
    desk,
    wardrobe,
    dresser,
    trash_can,
    small_rug,
    medium_rug,
    large_rug
];
