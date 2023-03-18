import express from 'express'
import helmet from 'helmet'
import router from '../routes'

export const startExpressServer = () => {
    const PORT = 3000

    const app = express()
    
    app.use(express.json())
    app.use(helmet())
    
    // Add routes here
    app.use('/api/v1', router)

    app.listen( PORT , async () => {
        console.log(`Application is running on http://localhost:${PORT}`)
    })
}