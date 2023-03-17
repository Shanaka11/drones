import droneRepository from "./DroneRepository";
import medicationRepository from "./MedicationRepository";

export type Repository<T> = {
    insert: (drone: T) => T;
    update: (drone: T) => T | undefined;
    remove: (serialNumber: string) => {} | undefined;
    get: (filter: Partial<T>) => T[];
}

export {
    droneRepository,
    medicationRepository
}