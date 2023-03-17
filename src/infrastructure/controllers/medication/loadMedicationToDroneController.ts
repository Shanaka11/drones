import { Request, Response } from "express";
import { IDrone, IMedication } from "../../../domain/entity";
import { eDroneModel, eDroneState } from "../../../domain/entity/Drone";

interface IMakeLoadMedicationToDrone {
    loadMedicationToDrone : ({ serialNumber, medicationCode }: {
        serialNumber: string;
        medicationCode: string;
    }) => {
        loadedMedication: IMedication[];
        serialNumber: string;
        model: eDroneModel;
        weightLimit: number;
        batteryCapacity: number;
        state: eDroneState;
    }
}

export const makeLoadMedicationToDroneController = ({
    loadMedicationToDrone,
}:IMakeLoadMedicationToDrone) => {
    return (req:Request<{}, {}, { medicationCode: string, serialNumber:string}>, res:Response) => {
        try {
            const loadedDrone = loadMedicationToDrone(req.body)
            res.status(201).send(loadedDrone)
        }catch (error:any){
            res.status(error.status || 500).send(error.message)
        }
    }
}