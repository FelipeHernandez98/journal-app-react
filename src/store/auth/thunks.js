import { async } from "@firebase/util";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInGoogle } from "../../firebase/providers";
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

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({ email, password, displayName });

        if(!ok) return dispathc( logout({errorMessage}))

        dispathc( login({ uid, displayName, email, photoURL }));
    } 
}

export const startLoginWithEmailPassword = ({ email, password}) =>{

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const { ok, uid, displayName, photoURL, errorMessage } = await loginWithEmailPassword({ email, password});

        if(!ok) return dispatch( logout({errorMessage}));

        dispatch( login({ uid, displayName, email, photoURL }));

    }
}

export const startLogout = () => {
    return async( dispatch ) =>{
        await logoutFirebase();
        dispatch( logout());
    } 
}