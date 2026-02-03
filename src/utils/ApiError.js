class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null//read more about it
        this.message=message
        this.success=false
        this.errors=errors
        
        //for laterunderstanding puspose
        if(stack){
            this.stack=stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}