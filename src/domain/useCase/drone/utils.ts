import { IDrone } from "../../entity";

const isAboveWeightLimit = (drone: IDrone, totalWeightToBeLoaded: number) => {
    // Check if the total weight is above the word limit
    return totalWeightToBeLoaded > drone.weightLimit 
}

export default {
    isAboveWeightLimit
}