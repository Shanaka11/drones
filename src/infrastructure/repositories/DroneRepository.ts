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

const get = (filter: Partial<IDrone>) : IDrone[] => {

    const filteredData = dataBase.drone.filter((data) => 
        //@ts-ignore
        Object.entries(filter).every(([key, value]) => data[key] === value)
    )

    return filteredData
    // if(serialNumber){
    //     const index = dataBase.drone.findIndex( item => item.serialNumber === serialNumber )
    //     if (index < 0) return
    //     return dataBase.drone[index]
    // }
    // return dataBase.drone
    return []
}

export default {
    insert,
    update,
    remove,
    get
}