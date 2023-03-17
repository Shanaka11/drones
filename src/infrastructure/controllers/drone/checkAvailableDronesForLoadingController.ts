import { Request, Response } from "express";
import { IDrone } from "../../../domain/entity/Drone";

interface IMakeCheckAvailableDronesForLoading {
    checkAvailableDronesForLoading: () => {
        drones: IDrone[];
    }
}
export const makeCheckAvailableDronesForLoadingController = ({
    checkAvailableDronesForLoading
}:IMakeCheckAvailableDronesForLoading) => {
    return (req:Request, res:Response) => {
        try {
            const drones = checkAvailableDronesForLoading()
            res.status(200).send(drones)
        }catch (error:any){
            res.status(error.status || 500).send(error.message)
        }
    }
}