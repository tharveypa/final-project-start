interface Room {
	type: string;
  	dimensions: number[];
  	building: string;
  	doorPosition: number[];
  	suite: boolean;
}

interface Bed {
  	name: "bed";
	dimensions: number[];
  	bunk: boolean;
}

interface Desk {
	name: "desk";
  	dimensions: number[];
  	position: number[];
}

interface Wardrobe {
	name: "wardrobe";
  	dimensions: number[];
 	position: number[];
}

interface Dresser {
	name: "dresser";
  	dimensions: number[];
  	position: number[];
}

interface Rug {
  	name: "rug";
  	dimensions: number[];
  	position: number[];
  	color: string;
}

interface Microwave {
 	name: "microwave";
  	dimensions: number[];
  	position: number[];
}

interface LaundryBasket {
	name: "Laundry Basket";
	dimensions: number[];
  	position: number[];
}

interface TrashCan {
	name: "Trash Can";
	dimensions: number[];
  	position: number[];
}

interface Fridge {
	name: "fridge";
  	dimensions: number[];
  	position: number[];
}