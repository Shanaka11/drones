import { Repository } from "../../../infrastructure/repositories"
import { errorResponse } from "../../../infrastructure/validation"
import { IDrone } from "../../entity"

interface IMakeCheckDroneBattery {
    repository: Repository<IDrone>
}

export const makeCheckDroneBattery = ({
    repository,
}:IMakeCheckDroneBattery) => {
    const checkDroneBattery = (serialNumber: string) => {
        const drone = repository.get(serialNumber)
        // Check if the drone exist
        if(!drone) throw errorResponse(404, `A drone with the serial number ${serialNumber} does not exist`)

        // Check if there are multiple drones
        if(Array.isArray(drone)) throw errorResponse(500, `There are multiple drones with the serial number ${serialNumber} please contact support`)

        return {
            batteryLevel: drone.batteryCapacity
        }
    }

    return checkDroneBattery
}