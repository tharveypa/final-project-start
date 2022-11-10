import { Food } from "../Interfaces/food";
import apple from "../pictures/apple.jpeg";
import broccoli from "../pictures/broccoli.jpeg";
import banana from "../pictures/banana.jpeg";
import hot_dog from "../pictures/hot_dog.jpeg";
import meatballs from "../pictures/meatballs.jpeg";
import spaghetti from "../pictures/broccoli.jpeg";

export const FRUIT_LIST: Food[] = [
    {
        name: "Apple",
        calories: 95,
        image_link: apple,
        healthy: true
    },
    {
        name: "Banana",
        calories: 105,
        image_link: banana,
        healthy: true
    }
];

export const PROTEIN_LIST: Food[] = [
    {
        name: "Meatballs",
        calories: 284,
        image_link: meatballs,
        healthy: true
    },
    {
        name: "Hot Dog",
        calories: 151,
        image_link: hot_dog,
        healthy: false
    }
];

export const VEGETABLE_LIST: Food[] = [
    {
        name: "Broccoli",
        calories: 50,
        image_link: broccoli,
        healthy: true
    }
];

export const CARBOHYDRATE_LIST: Food[] = [
    {
        name: "Spaghetti",
        calories: 221,
        image_link: spaghetti,
        healthy: true
    }
];
