import { Repository } from '../../../infrastructure/repositories'
import { IDrone, IMedication } from '../../entity'
import { makeLoadMedicationToDrone } from './loadMedicationToDrone'

interface IMakeMedicationApi {
    validateEntity: (data:IMedication) => void
    repository: Repository<IMedication>
    droneRepository: Repository<IDrone>
}

const makeMedicationApi = ({
    validateEntity,
    repository,
    droneRepository
}:IMakeMedicationApi) => {

    const loadMedicationToDrone = makeLoadMedicationToDrone({
        repository,
        droneRepository
    })

    return {
        loadMedicationToDrone
    }
}



export default {
    makeMedicationApi
}