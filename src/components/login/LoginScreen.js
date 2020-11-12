import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () =>{

        const lastPath = localStorage.getItem('lastPath') || '/';
    //    history.push('/');
    //    history.replace('/');
    //estraer del context dispatch y este distpacth mandar información mediante un action que tenga el typo de login
    // el objeto que se deberia enviar es un objeto con name: 'Tania' para que envie en el dispatch
 
    dispatch({
                type: types.login,
                payload: {
                    name: 'Fernando'
                }
            });

            history.replace(lastPath);
    }
  
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button 
            className="btn btn-primary"
            onClick={ handleLogin }
            >
                Entrar
            </button>
        </div>
    )
}
