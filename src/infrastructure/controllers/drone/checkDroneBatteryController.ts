import { Request, Response } from "express";

interface IMakeCheckDroneBattery {
    checkDroneBattery : (serialNumber: string) => { batteryLevel: number }
}
export const makeCheckDroneBatteryController = ({
    checkDroneBattery,
}:IMakeCheckDroneBattery) => {
    return (req:Request, res:Response) => {
        try {
            const serialNumber = req.params.id
            const battery = checkDroneBattery(serialNumber)
            res.status(200).send(battery)
        }catch (error:any){
            res.status(error.status || 500).send(error.message)
        }
    }
}