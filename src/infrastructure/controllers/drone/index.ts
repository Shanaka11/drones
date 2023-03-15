import { droneUseCases } from "../../../domain/useCase";
import { droneRepository } from "../../repositories";
import { makeRegisterDroneController } from "./registerDroneController";

const droneApi = droneUseCases.makeDroneApi({
    validateEntity: (data) => {},
    repository: droneRepository
})

const registerDroneController = makeRegisterDroneController({
    registerDrone: droneApi.registerDrone
})

export default {
    registerDroneController
}