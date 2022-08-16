import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = ( email, password ) =>{
    return async( dispathc ) =>{

        dispathc( checkingCredentials() );
    }
}

export const startGoogleSignin = ( email, password ) =>{
    return async( dispathc ) =>{

        dispathc( checkingCredentials() );
    }
}