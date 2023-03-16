import { IMedication } from "../../domain/entity"
import { dataBase } from "../db"


const insert = (medication: IMedication) => {
    dataBase.medication.push(medication)
    return medication
}

const update = (medication: IMedication) => {
    const index = dataBase.medication.findIndex( item => item.code === medication.code )
    if (index < 0) return
    dataBase.medication[index] = medication
    return medication
}

const remove = (code: string) => {
    const index = dataBase.medication.findIndex( item => item.code === code )
    if (index < 0) return
    dataBase.medication.splice(index, 1)
    return {}
}

const get = (code?: string) => {

    if(code){
        const index = dataBase.medication.findIndex( item => item.code === code )
        if (index < 0) return
        return dataBase.medication[index]
    }
    return dataBase.medication

}

export default {
    insert,
    update,
    remove,
    get
}