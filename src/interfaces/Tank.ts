type Tank = {
    /** To differentiated when there is multiples of the same fish */
    id: number;
    /** True if the fish lives in freshwater, false if the fish lives in saltwater */
    salt: boolean;
    /** True if the fish is a predator, false if the fish is prey */
    pred: boolean;
    x: number;
    y: number;
};

export default Tank;
