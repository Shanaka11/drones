
import express from "express"
// import droneRouter from "./drone."

const router = express.Router()

router.get('/healthcheck', (req, res) => {
    res.sendStatus(200)
})
// router.use('/drone', wordRouter)

export default router