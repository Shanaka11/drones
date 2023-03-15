import express from 'express'
import router from '../routes/express'

export const startExpressServer = () => {
    const PORT = process.env.PORT || 3000

    const app = express()
    
    app.use(express.json())
    
    // Add routes here
    app.use('/api/v1', router)

    app.listen( PORT , async () => {
        console.log(`Application is running on http://localhost:${PORT}`)
    })
}