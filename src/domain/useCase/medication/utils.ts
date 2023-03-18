import { IMedication } from "../../entity";

// This file will contain common utility methods related to this entity
const calculateTotalMedicationWeight = (medications:IMedication[]) => {
    return medications.reduce((acc, medication) => {
        return acc + medication.weight;
    }, 0)
}

export default{
    calculateTotalMedicationWeight
}