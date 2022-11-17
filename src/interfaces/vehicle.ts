export interface Vehicle {
    /** A unique identifier for the vehicle */
    id: number;

    /** Vehicle type */
    type: string;

    /** Vehicle size */
    size: number;

    /** Whether the vehicle battery has electric powers */
    battery: boolean;

    /** Whether the vehicle lock works properly */
    lock: boolean;

    /** Remaining fuel */
    fuel: number;

    /** Whether the vehicle has a flat tire */
    tire: boolean;
}
