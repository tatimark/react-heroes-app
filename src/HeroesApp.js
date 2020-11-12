import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'
// el init es porque va a leer el localstorage, va a retornar revisar el localstorage JSON.parse para evaluarlo
//evaluar localstorage si existe lo va a retornar y sino va a retornar un objeto con el logged en false
const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false
    }
}

export const HeroesApp = () => {
    
    const [ user, dispatch] = useReducer(authReducer, {}, init)

    //grabar en el localstorage si ese usuario cambia
    useEffect( () =>{ 
        localStorage.setItem('user', JSON.stringify( user )); // solo guarda string el localstorage
    }, [user] )

    return ( 
        <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />

        </AuthContext.Provider>
    )
}