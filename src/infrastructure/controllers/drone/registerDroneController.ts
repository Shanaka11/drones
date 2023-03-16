import { Request, Response } from "express";
import { IDrone } from "../../../domain/entity";

export const makeRegisterDroneController = ({
    registerDrone,
}:any) => {
    return (req:Request<{}, {}, IDrone>, res:Response) => {
        try {
            const data = req.body
            const drone = registerDrone(data)
            res.status(201).send(drone)
        }catch (error:any){
            res.status(500).send(error.message)
        }
    }
}