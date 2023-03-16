import * as z from 'zod'
import { IDrone } from '../../domain/entity'
import { eDroneModel, eDroneState } from '../../domain/entity/Drone'
import { errorResponse } from './errorResponse'

const schema = z.object({
    serialNumber: z.string().max(100),
    model: z.nativeEnum(eDroneModel),
    weightLimit: z.number().min(0).max(500),
    batteryCapacity: z.number().min(0).max(100),
    state: z.nativeEnum(eDroneState)
})

export const validateDroneEntity = (data:IDrone) => {
    try {
        schema.parse(data)
    } catch (error:any) {
        const errors = error.errors.map((item:any) => {
            return `${item.path} - ${item.message}`
        })
        throw errorResponse(400, errors)
    }
}