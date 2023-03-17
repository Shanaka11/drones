import { droneUseCases } from "../../../domain/useCase";
import { droneRepository, medicationRepository } from "../../repositories";
import { validateDroneEntity } from "../../validation";
import { makeCheckAvailableDronesForLoadingController } from "./checkAvailableDronesForLoadingController";
import { makeCheckDroneBatteryController } from "./checkDroneBatteryController";
import { makeCheckLoadedMedicationForDroneController } from "./checkLoadedMedicationForDroneController";
import { makeRegisterDroneController } from "./registerDroneController";

const droneApi = droneUseCases.makeDroneApi({
    validateEntity: validateDroneEntity,
    repository: droneRepository,
    medicationRepository: medicationRepository
})

const registerDroneController = makeRegisterDroneController({
    registerDrone: droneApi.registerDrone
})

const checkDroneBatteryController = makeCheckDroneBatteryController({
    checkDroneBattery: droneApi.checkDroneBattery
})

const checkLoadedMedicationForDroneController = makeCheckLoadedMedicationForDroneController({
    checkLoadedMedicationForDrone: droneApi.checkLoadedMedicationForDrone    
})

const checkAvailableDronesForLoadingController = makeCheckAvailableDronesForLoadingController({
    checkAvailableDronesForLoading: droneApi.checkAvailableDronesForLoading
})

export default {
    registerDroneController,
    checkDroneBatteryController,
    checkLoadedMedicationForDroneController,
    checkAvailableDronesForLoadingController
}