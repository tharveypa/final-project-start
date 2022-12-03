import { Food } from "../Interfaces/food";
import apple from "../pictures/apple.jpeg";
import broccoli from "../pictures/broccoli.jpeg";
import banana from "../pictures/banana.jpeg";
import hot_dog from "../pictures/hot_dog.jpeg";
import meatballs from "../pictures/meatballs.jpeg";
import spaghetti from "../pictures/spaghetti.jpeg";
import grape from "../pictures/grape.jpg";
import orange from "../pictures/orange.jpg";
import strawberry from "../pictures/strawberry.jpg";
import egg from "../pictures/egg.jpg";
import salmon from "../pictures/salmon.jpg";
import chicken from "../pictures/chicken.jpg";
import carrot from "../pictures/carrot.jpeg";
import pepper from "../pictures/pepper.jpeg";
import cucumber from "../pictures/cucumber.jpeg";
import potato from "../pictures/potato.jpeg";
import bread from "../pictures/bread.jpeg";
import beans from "../pictures/beans.jpeg";
import cookies from "../pictures/cookies.jpeg";
import rice from "../pictures/rice.jpeg";

export const FRUIT_LIST: Food[] = [
    {
        name: "Apple",
        calories: 95,
        image_link: apple,
        serving_size: 8,
        ingredients: ["Apple"],
        servings: 1
    },
    {
        name: "Banana",
        calories: 105,
        image_link: banana,
        serving_size: 4,
        ingredients: ["Banana"],
        servings: 1
    },
    {
        name: "Grape",
        calories: 62,
        image_link: grape,
        serving_size: 4,
        ingredients: ["Grape"],
        servings: 1
    },
    {
        name: "Orange",
        calories: 60,
        image_link: orange,
        serving_size: 4.7,
        ingredients: ["Orange"],
        servings: 1
    },
    {
        name: "Strawberry",
        calories: 53,
        image_link: strawberry,
        serving_size: 3.5,
        ingredients: ["Strawberry"],
        servings: 1
    }
];

export const PROTEIN_LIST: Food[] = [
    {
        name: "Meatballs",
        calories: 284,
        image_link: meatballs,
        serving_size: 3,
        ingredients: ["Meatballs"],
        servings: 1
    },
    {
        name: "Hot Dog",
        calories: 151,
        image_link: hot_dog,
        serving_size: 1.6,
        ingredients: ["Hot Dog"],
        servings: 1
    },
    {
        name: "Chicken",
        calories: 271,
        image_link: chicken,
        serving_size: 4,
        ingredients: ["Chicken"],
        servings: 1
    },
    {
        name: "Salmon",
        calories: 175,
        image_link: salmon,
        serving_size: 3,
        ingredients: ["Salmon"],
        servings: 1
    },
    {
        name: "Egg",
        calories: 78,
        image_link: egg,
        serving_size: 1.6,
        ingredients: ["Egg"],
        servings: 1
    }
];

export const VEGETABLE_LIST: Food[] = [
    {
        name: "Broccoli",
        calories: 50,
        image_link: broccoli,
        serving_size: 3,
        ingredients: ["Broccoli"],
        servings: 1
    },
    {
        name: "Carrot",
        calories: 25,
        image_link: carrot,
        serving_size: 2.8,
        ingredients: ["Carrot"],
        servings: 1
    },
    {
        name: "Pepper",
        calories: 30,
        image_link: pepper,
        serving_size: 5.3,
        ingredients: ["Pepper"],
        servings: 1
    },
    {
        name: "Cucumber",
        calories: 30,
        image_link: cucumber,
        serving_size: 3.5,
        ingredients: ["Cucumber"],
        servings: 1
    },
    {
        name: "Potato",
        calories: 163,
        image_link: potato,
        serving_size: 5.3,
        ingredients: ["Potato"],
        servings: 1
    }
];

export const CARBOHYDRATE_LIST: Food[] = [
    {
        name: "Spaghetti",
        calories: 221,
        image_link: spaghetti,
        serving_size: 2,
        ingredients: ["Spaghetti"],
        servings: 1
    },
    {
        name: "Bread",
        calories: 79,
        image_link: bread,
        serving_size: 1,
        ingredients: ["Bread"],
        servings: 1
    },
    {
        name: "Beans",
        calories: 42,
        image_link: beans,
        serving_size: 3,
        ingredients: ["Beans"],
        servings: 1
    },
    {
        name: "Cookies",
        calories: 142,
        image_link: cookies,
        serving_size: 1,
        ingredients: ["Cookies"],
        servings: 1
    },
    {
        name: "Rice",
        calories: 206,
        image_link: rice,
        serving_size: 1,
        ingredients: ["Rice"],
        servings: 1
    }
];
