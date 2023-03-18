import { droneUtil } from "."
import { Repository } from "../../../infrastructure/repositories"
import { errorResponse } from "../../../infrastructure/validation"
import { IDrone, IMedication } from "../../entity"
import { eDroneState } from "../../entity/Drone"
import { medicationUtil } from "../medication"

interface IMakeCheckAvalialbeDronesForLoading {
    repository: Repository<IDrone>
    medicationRepository: Repository<IMedication>
}

export const makeCheckAvailableDronesForLoading = ({
    repository,
    medicationRepository
}:IMakeCheckAvalialbeDronesForLoading) => {
    const checkAvailableDronesForLoading = () => {
        // Get drones that are in idle or loading state
        const drones = repository.get({
            state: [eDroneState.IDLE, eDroneState.LOADING]
        })

        // Check battery level and if their is room available in the drones
        const availableDrones = drones.filter( drone => {
            if(drone.batteryCapacity > 25){
                const loadedWeight = medicationUtil.calculateTotalMedicationWeight(medicationRepository.get({
                    drone: drone.serialNumber
                }))

                if(droneUtil.isAboveWeightLimit(drone, loadedWeight)) return false

                return true
            }
            return false
        })

        return {
            drones: availableDrones
        }
    }

    return checkAvailableDronesForLoading
}