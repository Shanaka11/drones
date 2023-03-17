
import express from "express"
import droneRouter from "./droneRouter"
import medicationRouter from './medicationRouter'

const router = express.Router()

router.get('/healthcheck', (req, res) => {
    res.sendStatus(200)
})

router.use('/drones', droneRouter)
router.use('/medications', medicationRouter)

export default router