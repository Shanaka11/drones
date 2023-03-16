export const errorResponse = (
    status: number,
    errors: string[] | string
) => {

    if(Array.isArray(errors)){
        return {
            message: {
                status : status || 500,
                errors : errors
            }
        }
    }
    return {
        message: {
            status : status || 500,
            errors: [ errors ]
        }
    }
    
    
}