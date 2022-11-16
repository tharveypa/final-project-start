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
    picture: string;
}
const couch1 = {
    type: "Living Room",
    size: "small",
    isComfy: true,
    picture: "src/Furniture/couch 1.jpg"
};
const couch2 = {
    type: "Living Room",
    size: "large",
    isComfy: true,
    picture: "src/Furniture/couch 2.jpg"
};
const couch3 = {
    type: "Living Room",
    size: "medium",
    isComfy: true,
    picture: "src/Furniture/couch 3.jpg"
};
const couch4 = {
    type: "Living Room",
    size: "large",
    isComfy: true,
    picture: "src/Furniture/couch 4.jpg"
};
const couch5 = {
    type: "Bedroom",
    size: "small",
    isComfy: true,
    picture: "src/Furniture/couch 5.jpg"
};
const couch6 = {
    type: "Living Room",
    size: "medium",
    isComfy: true,
    picture: "src/Furniture/couch 6.jpg"
};

interface Bed {
    type: string;
    size: string;
    picture: string;
}
const bed1 = {
    type: "Kids Room",
    size: "Twin",
    picture: "src/Furniture/bed 1.jpg"
};
const bed2 = {
    type: "Kids Room",
    size: "Twin",
    picture: "src/Furniture/bed 2.jpg"
};
const bed3 = {
    type: "Adult Room",
    size: "Double",
    picture: "src/Furniture/bed 3.jpg"
};
const bed4 = {
    type: "Adult Room",
    size: "Queen",
    picture: "src/Furniture/bed 4.jpg"
};
