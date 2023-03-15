import express from 'express'
import { droneController } from '../controllers'

const router = express.Router()

router.route('/')
.post(droneController.registerDroneController)

export default router