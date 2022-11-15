export {};
const furniture = ["Chairs", "Couches", "Tables", "Beds", "Dressers"];

interface Chair {
    type: string;
    size: string;
    color: string;
    isComfy: boolean;
}

const dining: Chair = {
    type: "Dining Room",
    size: "Small",
    color: "brown",
    isComfy: false
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
