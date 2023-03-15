import { Repository } from '../../../infrastructure/repositories'
import { IDrone, makeCreateDrone } from '../../entity'
import { makeRegisterDrone } from './registerDrone'

interface IMakeDroneApi {
    validateEntity: (data:IDrone) => void
    repository: Repository<IDrone> 
}

const makeDroneApi = ({
    validateEntity,
    repository
}:IMakeDroneApi) => {

    const createDrone = makeCreateDrone({
        validateEntity
    })

    const registerDrone = makeRegisterDrone({
        createDrone,
        repository
    })

    return {
        registerDrone
    }
}



export default {
    makeDroneApi
}