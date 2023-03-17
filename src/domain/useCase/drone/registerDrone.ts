import { Repository } from "../../../infrastructure/repositories"
import { errorResponse } from "../../../infrastructure/validation"
import { IDrone } from "../../entity"

interface IMakeRegisterDrone {
    createDrone: (data:IDrone) =>IDrone
    repository: Repository<IDrone>
}

export const makeRegisterDrone = ({
    createDrone,
    repository,
}:IMakeRegisterDrone) => {
    const registerDrone = (droneData: IDrone) => {
        const drone = createDrone(droneData)

        // Check if drone already exists before inserting it
        if(repository.get({
            serialNumber: drone.serialNumber
        }).length > 0) throw errorResponse(400, 'A drone with the same serial number already exists')

        repository.insert(drone)
        return drone
    }

    return registerDrone
}