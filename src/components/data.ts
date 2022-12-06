import type {
    Bed,
    Desk,
    Wardrobe,
    Dresser,
    Rug,
    TrashCan,
    Microwave
} from "./types";

const blue_bed: Bed = {
    id: "menu-blue-bed",
    name: "Blue Bed",
    height: 38 * 3,
    width: 80 * 3,
    bunk: false,
    top: 0,
    left: 0,
    color: "cadetblue"
};

const red_bed: Bed = {
    id: "menu-red-bed",
    name: "Red Bed",
    height: 38 * 3,
    width: 80 * 3,
    bunk: false,
    top: 0,
    left: 0,
    color: "red"
};

const yellow_bed: Bed = {
    id: "menu-yellow-bed",
    name: "Yellow Bed",
    height: 38 * 3,
    width: 80 * 3,
    bunk: false,
    top: 0,
    left: 0,
    color: "yellow"
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
    id: "menu-trash-can",
    name: "Trash Can",
    height: 15 * 3,
    width: 20 * 3,
    top: 0,
    left: 0,
    color: "grey"
};

const orange_rug_small: Rug = {
    id: "menu-rug",
    name: "Small Orange Rug",
    height: 50 * 3,
    width: 75 * 3,
    color: "coral",
    top: 0,
    left: 0
};

const orange_rug_medium: Rug = {
    id: "menu-rug",
    name: "Medium Orange Rug",
    height: 65 * 3,
    width: 125 * 3,
    color: "coral",
    top: 0,
    left: 0
};

const orange_rug_large: Rug = {
    id: "menu-rug",
    name: "Large Orange Rug",
    height: 75 * 3,
    width: 150 * 3,
    color: "coral",
    top: 0,
    left: 0
};

const blue_rug_small: Rug = {
    id: "menu-rug",
    name: "Small Blue Rug",
    height: 50 * 3,
    width: 75 * 3,
    color: "lightblue",
    top: 0,
    left: 0
};

const blue_rug_medium: Rug = {
    id: "menu-rug",
    name: "Medium Blue Rug",
    height: 65 * 3,
    width: 125 * 3,
    color: "lightblue",
    top: 0,
    left: 0
};

const blue_rug_large: Rug = {
    id: "menu-rug",
    name: "Large Blue Rug",
    height: 75 * 3,
    width: 150 * 3,
    color: "lightblue",
    top: 0,
    left: 0
};

const microwave: Microwave = {
    id: "menu-microwave",
    name: "Microwave",
    height: 20 * 3,
    width: 25 * 3,
    color: "black",
    top: 0,
    left: 0
};

export const furniture = [
    blue_bed,
    red_bed,
    yellow_bed,
    desk,
    wardrobe,
    dresser,
    trash_can,
    microwave,
    orange_rug_small,
    orange_rug_medium,
    orange_rug_large,
    blue_rug_small,
    blue_rug_medium,
    blue_rug_large
];
