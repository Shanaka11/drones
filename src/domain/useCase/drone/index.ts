import { Repository } from '../../../infrastructure/repositories'
import { IDrone, IMedication, makeCreateDrone } from '../../entity'
import { makeCheckAvailableDronesForLoading } from './checkAvailableDronesForLoading'
import { makeCheckDroneBattery } from './checkDroneBattery'
import { makeCheckLoadedMedicationForDrones } from './checkLoadedMedicationForDrone'
import { makeRegisterDrone } from './registerDrone'
import droneUtil from './utils'

interface IMakeDroneApi {
    validateEntity: (data:IDrone) => void
    repository: Repository<IDrone> 
    medicationRepository: Repository<IMedication>
}

const makeDroneApi = ({
    validateEntity,
    repository,
    medicationRepository
}:IMakeDroneApi) => {

    const createDrone = makeCreateDrone({
        validateEntity
    })

    const registerDrone = makeRegisterDrone({
        createDrone,
        repository
    })

    const checkDroneBattery = makeCheckDroneBattery({
        repository
    })

    const checkLoadedMedicationForDrone = makeCheckLoadedMedicationForDrones({
        repository,
        medicationRepository
    })

    const checkAvailableDronesForLoading = makeCheckAvailableDronesForLoading({
        repository,
        medicationRepository
    })

    return {
        registerDrone,
        checkDroneBattery,
        checkLoadedMedicationForDrone,
        checkAvailableDronesForLoading
    }
}


export {
    droneUtil
}

export default {
    makeDroneApi
}