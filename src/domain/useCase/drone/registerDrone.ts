import { Repository } from "../../../infrastructure/repositories"
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
        repository.insert(drone)
    }

    return registerDrone
}