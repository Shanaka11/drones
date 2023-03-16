import * as z from 'zod'
import { IDrone } from '../../domain/entity'

const schema = z.object({
    serialNumber: z.string().max(100),
    model: z.enum(['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight']),
    weightLimit: z.number().min(0).max(500),
    batteryCapacity: z.number().min(0).max(100),
    state: z.enum(['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'])
})

export const validateDroneEntity = (data:IDrone) => {
    try {
        schema.parse(data)
    } catch (error:any) {
        const errors = error.errors.map((item:any) => {
            return `${item.path} - ${item.message}`
        })
        throw {
            message: errors
        }
    }
}