import { ICreateEntity } from "./common"


interface IMedication {
    name: string,
    weight: number,
    code: string,
    image: string, // For the moment we are storing only the url of the image , ideally the api should take a base 64 image and then upload it to a service like s3 and save the url in the database
    drone?: string
}

const makeCreateMedication = ({
    validateEntity
}:ICreateEntity<IMedication>) => {
    return (data: IMedication) => {
        
        validateEntity(data)

        return {
            name: data.name,
            weight: data.weight,
            code: data.code,
            image: data.image,
            drone: data.drone
        }
    }
}

export {
    IMedication,
    makeCreateMedication
}