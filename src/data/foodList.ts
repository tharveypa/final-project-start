import { Food } from "../Interfaces/food";
import apple from "../pictures/apple.jpeg";
import broccoli from "../pictures/broccoli.jpeg";
import banana from "../pictures/banana.jpeg";
import hot_dog from "../pictures/hot_dog.jpeg";
import meatballs from "../pictures/meatballs.jpeg";
import spaghetti from "../pictures/broccoli.jpeg";
import carrot from "../pictures/carrot.jpeg";
import pepper from "../pictures/pepper.jpeg";
import cucumber from "../pictures/cucumber.jpeg";
import potato from "../pictures/potato.jpeg";
import bread from "../pictures/bread.jpeg";
import beans from "../pictures/bread.jpeg";
import cookies from "../pictures/cookies.jpeg";
import rice from "../pictures/rice.jpeg";

export const FRUIT_LIST: Food[] = [
    {
        name: "Apple",
        calories: 95,
        image_link: apple,
        serving_size: 0
    },
    {
        name: "Banana",
        calories: 105,
        image_link: banana,
        serving_size: 0
    }
];

export const PROTEIN_LIST: Food[] = [
    {
        name: "Meatballs",
        calories: 284,
        image_link: meatballs,
        serving_size: 0
    },
    {
        name: "Hot Dog",
        calories: 151,
        image_link: hot_dog,
        serving_size: 0
    }
];

export const VEGETABLE_LIST: Food[] = [
    {
        name: "Broccoli",
        calories: 50,
        image_link: broccoli,
        serving_size: 0
    },
    {
        name: "Carrot",
        calories: 25,
        image_link: carrot,
        serving_size: 2.8
    },
    {
        name: "Pepper",
        calories: 30,
        image_link: pepper,
        serving_size: 5.3
    },
    {
        name: "Cucumber",
        calories: 30,
        image_link: cucumber,
        serving_size: 3.5
    },
    {
        name: "Potato",
        calories: 163,
        image_link: potato,
        serving_size: 5.3
    }
];

export const CARBOHYDRATE_LIST: Food[] = [
    {
        name: "Spaghetti",
        calories: 221,
        image_link: spaghetti,
        serving_size: 2
    },
    {
        name: "Bread",
        calories: 79,
        image_link: bread,
        serving_size: 1
    },
    {
        name: "Beans",
        calories: 42,
        image_link: beans,
        serving_size: 3
    },
    {
        name: "Cookies",
        calories: 142,
        image_link: cookies,
        serving_size: 1
    },
    {
        name: "Rice",
        calories: 206,
        image_link: rice,
        serving_size: 1
    }
];
