import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'No-autenticado', //Autenticado, no autenticado , verificando
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action ) => {
            
        },
        logout: ( state, payload ) =>{

        },
        checkingCredentials: ( state ) =>{
            state.status = 'verificando' 
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;