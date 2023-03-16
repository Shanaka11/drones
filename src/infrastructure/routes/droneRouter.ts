import express from 'express'
import { droneController } from '../controllers'

const router = express.Router()

router.route('/')
.post(droneController.registerDroneController)

router.route('/battery/:id')
.get(droneController.checkDroneBatteryController)


export default router