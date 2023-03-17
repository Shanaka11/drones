import { droneUseCases, medicationUseCases } from "../../../domain/useCase";
import { droneRepository, medicationRepository } from "../../repositories";
import { validateDroneEntity, validateMedicationEntity } from "../../validation";
import { makeLoadMedicationToDroneController } from "./loadMedicationToDroneController";

const medicationApi = medicationUseCases.makeMedicationApi({
    validateEntity: validateMedicationEntity,
    repository: medicationRepository,
    droneRepository: droneRepository
})

const registerDroneController = makeLoadMedicationToDroneController({
    loadMedicationToDrone: medicationApi.loadMedicationToDrone
})

export default {
    registerDroneController
}