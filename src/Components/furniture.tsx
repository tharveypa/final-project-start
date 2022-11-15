import { isCommaListExpression } from "typescript";

export {};
const furniture = ["Chairs", "Couches", "Tables", "Beds", "Dressers"];

interface Chair {
    type: string;
    size: string;
    pattern: string;
    color: string[];
    isComfy: boolean;
    picture: string;
}

const chair1 = {
    type: "Dining Room",
    size: "Small",
    pattern: "Solid",
    color: ["white"],
    isComfy: false,
    picture: "src/Furniture/chair 1.jpg" //chair1.picture the picture will show up
};

const chair2 = {
    type: "Living Room",
    size: "Medium",
    pattern: "Stripes",
    color: ["brown", "black", "white"],
    isComfy: true,
    picture: "src/Furniture/chair 2.jpg"
};

const chair3 = {
    type: "Living Room",
    size: "Small",
    pattern: "Zig-Zag",
    color: ["white", "green"],
    isComfy: true,
    picture: "src/Furniture/chair 3.jpg"
};

const chair4 = {
    type: "Living Room",
    size: "Medium",
    pattern: "Solid",
    color: ["blue"],
    isComfy: true,
    picture: "src/Furniture/chair 4.jpg"
};

const chair5 = {
    type: "Bedroom",
    size: "Medium",
    pattern: "Stripes",
    color: ["pink", "white", "light blue"],
    isComfy: true,
    picture: "src/Furniture/chair 5.jpg"
};

const chair6 = {
    type: "Bedroom",
    size: "Large",
    pattern: "Zig-Zag",
    color: ["Brown", "cream"],
    isComfy: true,
    picture: "src/Furniture/chair 6.jpg"
};
interface Couch {
    type: string;
    size: string;
    isComfy: boolean;
    reclines: boolean;
}
const livingRoomCouch = {
    type: "Living Room",
    size: "large",
    isComfy: true,
    reclines: false
};
