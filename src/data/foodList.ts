import { Food } from "../Interfaces/food";
import apple from "../pictures/apple.jpeg";
import broccoli from "../pictures/broccoli.jpeg";
import banana from "../pictures/banana.jpeg";
import hot_dog from "../pictures/hot_dog.jpeg";
import meatballs from "../pictures/meatballs.jpeg";
import spaghetti from "../pictures/broccoli.jpeg";
import grape from "../pictures/grape.jpg";
import orange from "../pictures/orange.jpg";
import strawberry from "../pictures/strawberry.jpg";
import egg from "../pictures/egg.jpg";
import salmon from "../pictures/salmon.jpg";
import chicken from "../pictures/chicken.jpg";

export const FRUIT_LIST: Food[] = [
    {
        name: "Apple",
        calories: 95,
        image_link: apple,
        serving_size: 8
    },
    {
        name: "Banana",
        calories: 105,
        image_link: banana,
        serving_size: 4
    },
    {
        name: "Grape",
        calories: 62,
        image_link: grape,
        serving_size: 4
    },
    {
        name: "Orange",
        calories: 60,
        image_link: orange,
        serving_size: 4.7
    },
    {
        name: "Strawberry",
        calories: 53,
        image_link: strawberry,
        serving_size: 3.5
    }
];

export const PROTEIN_LIST: Food[] = [
    {
        name: "Meatballs",
        calories: 284,
        image_link: meatballs,
        serving_size: 3
    },
    {
        name: "Hot Dog",
        calories: 151,
        image_link: hot_dog,
        serving_size: 1.6
    },
    {
        name: "Chicken",
        calories: 271,
        image_link: chicken,
        serving_size: 4
    },
    {
        name: "Salmon",
        calories: 175,
        image_link: salmon,
        serving_size: 3
    },
    {
        name: "Egg",
        calories: 78,
        image_link: egg,
        serving_size: 1.6
    }
];

export const VEGETABLE_LIST: Food[] = [
    {
        name: "Broccoli",
        calories: 50,
        image_link: broccoli,
        serving_size: 3
    }
];

export const CARBOHYDRATE_LIST: Food[] = [
    {
        name: "Spaghetti",
        calories: 221,
        image_link: spaghetti,
        serving_size: 2
    }
];
