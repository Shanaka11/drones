import { Repository } from "../../../infrastructure/repositories"
import { errorResponse } from "../../../infrastructure/validation"
import { IDrone, IMedication } from "../../entity"

interface IMakeCheckDroneBattery {
    repository: Repository<IDrone>
    medicationRepository: Repository<IMedication>
}

export const makeCheckLoadedMedicationForDrones = ({
    repository,
    medicationRepository
}:IMakeCheckDroneBattery) => {
    const checkLoadedMedicationForDrones = (serialNumber: string) => {

        const drone = repository.get({
            serialNumber: serialNumber
        })

        // Check if the drone exist
        if(drone.length === 0) throw errorResponse(404, `A drone with the serial number ${serialNumber} does not exist`)

        // Get loaded medications
        const loadedMedication = medicationRepository.get({
            drone: serialNumber
        })

        return {
            ...drone[0],
            loadedMedication
        }
    }

    return checkLoadedMedicationForDrones
}