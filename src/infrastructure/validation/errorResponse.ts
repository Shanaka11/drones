export const errorResponse = (
    status: number,
    errors: string[] | string
) => {

    if(Array.isArray(errors)){
        return {
            status: status || 500,
            message: {
                errors : errors
            }
        }
    }
    return {
        status : status || 500,
        message: {
            errors: [ errors ]
        }
    }
    
    
}