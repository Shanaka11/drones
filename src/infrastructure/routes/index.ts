
import express from "express"
import droneRouter from "./droneRouter"
import medicationRouter from './medicationRouter'

const router = express.Router()

router.get('/healthcheck', (req, res) => {
    res.sendStatus(200)
})

router.use('/drone', droneRouter)
router.use('/medication', medicationRouter)

export default router