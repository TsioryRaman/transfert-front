export type SignupErrorType = {
    username:{
        error:string,
        isError:boolean,
        errorMessage:string
    },
    password:{
        error:string,
        isError:boolean,
        errorMessage:string
    },
    email:{
        error:string,
        isError:boolean,
        errorMessage:string
    }
}