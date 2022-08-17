import { async } from "@firebase/util";
import { registerUserWithEmailPassword, singInGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) =>{
    return async( dispathc ) =>{

        dispathc( checkingCredentials() );
    }
}

export const startGoogleSignin = ( email, password ) =>{
    return async( dispathc ) =>{

        dispathc( checkingCredentials() );
        const result = await singInGoogle();
        
        if (!result.ok) return dispathc(logout(result.errorMessage))

        dispathc( login( result ))
    }
}

export const startCreatingUserWithEmailAndPassword = ({ email, password, displayName })=>{

    return async( dispathc ) =>{
        dispathc( checkingCredentials() );

        const resp = await registerUserWithEmailPassword({ email, password, displayName });

        console.log(resp)
    } 
}