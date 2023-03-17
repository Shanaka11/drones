import { IDrone } from "../../domain/entity"
import { dataBase } from "../db"


const insert = (drone: IDrone) => {
    dataBase.drone.push(drone)
    return drone
}

const update = (drone: IDrone) => {
    const index = dataBase.drone.findIndex( item => item.serialNumber === drone.serialNumber )
    if (index < 0) return
    dataBase.drone[index] = drone
    return drone
}

const remove = (serialNumber: string) => {
    const index = dataBase.drone.findIndex( item => item.serialNumber === serialNumber )
    if (index < 0) return
    dataBase.drone.splice(index, 1)
    return {}
}

const get = (filter: any) : IDrone[] => {

    const filteredData = dataBase.drone.filter((data) => 
        Object.entries(filter).every(([key, value]) => {
            //If value is an array then check if the data[key] matches at least one of the arrays
            if(Array.isArray(value)){
                //@ts-ignore
                return value.includes(data[key])
            }
            //@ts-ignore
            return data[key] === value
        })
    )

    return filteredData
}

export default {
    insert,
    update,
    remove,
    get
}