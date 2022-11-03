export interface Food {
    name: string;
    calories: number;
    /** The spoiling rate is how many days it takes for the food item to expire */
    spoiling_rate: number;
    image_link: string;
    healthy: boolean;
    /** ingredients: string[] */
}
