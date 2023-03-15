export interface ICreateEntity<T> {
    validateEntity: (entityData:T) => void
}