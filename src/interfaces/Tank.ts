type Tank = {
    /** To differentiated when there is multiples of the same fish */
    id: number;
    /** True if the fish lives in freshwater, false if the fish lives in saltwater */
    freshwater: boolean;
    /** True if the fish is a predator, false if the fish is prey */
    predator: boolean;
    /** how many pixels of fish the tank can hold */
    capacity: number;
};

export default Tank;
