export interface Vehicle {
    /** A unique identifier for the vehicle */
    id: number;

    /** Vehicle type */
    type: string;

    /** Vehicle size */
    size: number;

    /** Whether the battery has power */
    battery: boolean;

    /** Whether the car lock is working properly */
    lock: boolean;

    /** Remaining fuel */
    fuel: number;

    /** Whether the tires have air */
    tire: boolean;
}
