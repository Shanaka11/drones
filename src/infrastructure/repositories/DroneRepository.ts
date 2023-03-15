import { IDrone } from "../../domain/entity"
import { dataBase } from "../db"


const insert = (drone: IDrone) => {
    dataBase.drone.push(drone)
}

const update = (drone: IDrone) => {
    const index = dataBase.drone.findIndex( item => item.serialNumber === drone.serialNumber )
    if (index < 0) throw new Error('Drone does not exist')
    dataBase.drone[index] = drone
    return drone
}

const remove = (serialNumber: string) => {
    const index = dataBase.drone.findIndex( item => item.serialNumber === serialNumber )
    if (index < 0) throw new Error('Drone does not exist')
    dataBase.drone.splice(index, 1)
    return {}
}

const get = (serialNumber?: string) => {

    if(serialNumber){
        const index = dataBase.drone.findIndex( item => item.serialNumber === serialNumber )
        if (index < 0) throw new Error('Drone does not exist')
        return dataBase.drone[index]
    }
    return dataBase.drone

}

export default {
    insert,
    update,
    remove,
    get
}