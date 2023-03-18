import { medicationUtil } from "."
import { Repository } from "../../../infrastructure/repositories"
import { errorResponse } from "../../../infrastructure/validation"
import { IDrone, IMedication } from "../../entity"
import { droneUtil } from "../drone"

interface IMakeLoadMedicationToDrone {
    repository: Repository<IMedication>,
    droneRepository: Repository<IDrone>
}

export const makeLoadMedicationToDrone = ({
    repository,
    droneRepository
}:IMakeLoadMedicationToDrone) => {
    const loadMedicationToDrone = ({ 
        serialNumber, 
        medicationCode
    }: { serialNumber: string, medicationCode: string}) => {

        const drone = droneRepository.get({
            serialNumber: serialNumber
        })
        // Check if the drone exist
        if(drone.length === 0) throw errorResponse(404, `A drone with the serial number ${serialNumber} does not exist`)
        
        // Get the loaded medication for the drone
        const medication = repository.get({
            code: medicationCode
        })

        // Check if the medication exist
        if(medication.length === 0) throw errorResponse(404, `A medication with the code ${medicationCode} does not exist`)

        const loadedMedication = repository.get({
            drone: serialNumber
        })

        // Check if the drone is avaliable to be loaded
        const loadedWeight = medicationUtil.calculateTotalMedicationWeight(loadedMedication);

        if( droneUtil.isAboveWeightLimit(drone[0], loadedWeight + medication[0].weight)) throw errorResponse(400, `Cannot load medication to drone, weight limit exceeds`)

        // Load medication to the drone and return drone with loaded medication
        const selectedMedication = medication[0]
        selectedMedication.drone = drone[0].serialNumber

        repository.update(selectedMedication)

        return {
            ...drone[0],
            loadedMedication: [
                medication[0],
                ...loadedMedication
            ]
        }
    }

    return loadMedicationToDrone
}