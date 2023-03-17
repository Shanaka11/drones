import express from 'express'
import { medicationController } from '../controllers'

const router = express.Router()

router.route('/load')
.post(medicationController.registerDroneController)


export default router