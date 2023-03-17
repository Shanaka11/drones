import * as z from 'zod'
import { IMedication } from '../../domain/entity'
import { zodSerialNumber } from './droneValidation'
import { errorResponse } from './errorResponse'

const schema = z.object({
    name: z.string().regex(/^[a-zA-Z0-9_-]+$/),
    weight: z.number().min(0),
    code: z.string().regex(/^[A-Z0-9_]+$/),
    image: z.string().url(),
    drone: zodSerialNumber
})

export const validateMedicationEntity = (data:IMedication) => {
    try {
        schema.parse(data)
    } catch (error:any) {
        const errors = error.errors.map((item:any) => {
            return `${item.path} - ${item.message}`
        })
        throw errorResponse(400, errors)
    }
}