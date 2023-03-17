import { Request, Response } from "express";
import { IMedication } from "../../../domain/entity";
import { eDroneModel, eDroneState } from "../../../domain/entity/Drone";

interface IMakeMedicationForDroneController {
    checkLoadedMedicationForDrone : (serialNumber: string) => {
        loadedMedication: IMedication[];
        serialNumber: string;
        model: eDroneModel;
        weightLimit: number;
        batteryCapacity: number;
        state: eDroneState;
    }
}
export const makeCheckLoadedMedicationForDroneController = ({
    checkLoadedMedicationForDrone,
}:IMakeMedicationForDroneController) => {
    return (req:Request, res:Response) => {
        try {
            const serialNumber = req.params.id
            const drone = checkLoadedMedicationForDrone(serialNumber)
            res.status(200).send(drone)
        }catch (error:any){
            res.status(error.status || 500).send(error.message)
        }
    }
}