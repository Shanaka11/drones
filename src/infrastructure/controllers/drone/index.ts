import { droneUseCases } from "../../../domain/useCase";
import { droneRepository } from "../../repositories";
import { validateDroneEntity } from "../../validation";
import { makeRegisterDroneController } from "./registerDroneController";

const droneApi = droneUseCases.makeDroneApi({
    validateEntity: validateDroneEntity,
    repository: droneRepository
})

const registerDroneController = makeRegisterDroneController({
    registerDrone: droneApi.registerDrone
})

export default {
    registerDroneController
}