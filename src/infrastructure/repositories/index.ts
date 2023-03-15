import droneRepository from "./DroneRepository";

export type Repository<T> = {
    insert: (drone: T) => T;
    update: (drone: T) => T;
    remove: (serialNumber: string) => {};
    get: (serialNumber?: string ) => T | T[];
}

export {
    droneRepository
}