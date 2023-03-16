import droneRepository from "./DroneRepository";

export type Repository<T> = {
    insert: (drone: T) => T;
    update: (drone: T) => T | undefined;
    remove: (serialNumber: string) => {} | undefined;
    get: (serialNumber?: string ) => T | T[] | undefined;
}

export {
    droneRepository
}