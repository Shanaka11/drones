import { ICreateEntity } from "./common"

interface IDrone {
    serialNumber:string,
    model: string,
    weightLimit: number,
    batteryCapacity: number,
    state: string
}

const makeCreateDrone = ({
    validateEntity
}: ICreateEntity<IDrone>) => {

    return (data:IDrone) => { 
        // ValidateEntity - 3rd Party Validator like zod
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