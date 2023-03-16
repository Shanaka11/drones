import { ICreateEntity } from "./common"

export enum eDroneModel {
    'Lightweight' = 'Lightweight', 
    'Middleweight' = 'Middleweight' , 
    'Cruiserweight' = 'Cruiserweight', 
    'Heavyweight' = 'Heavyweight'
}

export enum eDroneState {
    'IDLE' = 'IDLE', 
    'LOADING' = 'LOADING', 
    'LOADED' = 'LOADED', 
    'DELIVERING' = 'DELIVERING', 
    'DELIVERED' = 'DELIVERED', 
    'RETURNING' = 'RETURNING'
}

interface IDrone {
    serialNumber:string,
    model: eDroneModel,
    weightLimit: number,
    batteryCapacity: number,
    state: eDroneState
}

const makeCreateDrone = ({
    validateEntity
}: ICreateEntity<IDrone>) => {

    return (data:IDrone) => { 

        validateEntity(data)
        
        return {
            serialNumber: data.serialNumber,
            model: data.model,
            weightLimit: data.weightLimit,
            batteryCapacity: data.batteryCapacity,
            state: data.state
        }
    }

}

export {
    IDrone,
    makeCreateDrone
}