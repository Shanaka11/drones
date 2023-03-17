import express from 'express'
import { droneController } from '../controllers'

const router = express.Router()

router.route('/')
.post(droneController.registerDroneController)

router.route('/battery/:id')
.get(droneController.checkDroneBatteryController)

router.route('/load/:id')
.get(droneController.checkLoadedMedicationForDroneController)

router.route('/available')
.get(droneController.checkAvailableDronesForLoadingController)

export default router