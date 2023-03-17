import { Request, Response } from "express";
import { IDrone } from "../../../domain/entity";


interface IMakeRegisterDrone {
    registerDrone : (droneData: IDrone) => IDrone
}

export const makeRegisterDroneController = ({
    registerDrone,
}:IMakeRegisterDrone) => {
    return (req:Request<{}, {}, IDrone>, res:Response) => {
        try {
            const data = req.body
            const drone = registerDrone(data)
            res.status(201).send(drone)
        }catch (error:any){
            res.status(error.status || 500).send(error.message)
        }
    }
}