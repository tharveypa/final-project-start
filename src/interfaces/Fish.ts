export interface Fish {
    /** To differentiated when there is multiples of the same fish */
    id: number;
    /** True if the fish lives in freshwater, false if the fish lives in saltwater */
    freshwater: boolean;
    /** Species name */
    name: string;
    /** True if the fish is a predator, false if the fish is prey */
    predator: boolean;
    /** how big or small the fish will appear on the screen (pixels) */
    size: number;
    /** x,y coordinate of the fish on the screen */
    position: [number, number];
    /** Filepath of the fish image to render on screen */
    image: string;
}
