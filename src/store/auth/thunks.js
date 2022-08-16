import { singInGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = ( email, password ) =>{
    return async( dispathc ) =>{

        dispathc( checkingCredentials() );
    }
}

export const startGoogleSignin = ( email, password ) =>{
    return async( dispathc ) =>{

        dispathc( checkingCredentials() );
        const result = await singInGoogle();
        console.log({ result })
    }
}