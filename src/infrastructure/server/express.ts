import express from 'express'

export const startExpressServer = () => {
    const PORT = process.env.PORT || 3000

    const app = express()
    
    app.use(express.json())
    
    // Add routes here
    
    app.listen( PORT , async () => {
        console.log(`Application is running on http://localhost:${PORT}`)
    })
}