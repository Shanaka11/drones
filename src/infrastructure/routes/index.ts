
import express from "express"
import droneRouter from "./droneRouter"

const router = express.Router()

router.get('/healthcheck', (req, res) => {
    res.sendStatus(200)
})

router.use('/drone', droneRouter)

export default router