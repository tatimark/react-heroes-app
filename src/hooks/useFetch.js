import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {


    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
            // cuando se desmonte lo que quiere cambiar es el valor
            return () => {
                isMounted.current = false;
            }
        }, []) //que solo lo haga cuando el componente se carga por primera vez

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url).then(resp => resp.json()).then(data => {


            if (isMounted.current) { // si esta true significa que todavía esta montado
                setState({
                    loading: false,
                    error: null,
                    data
                })
            }



        }).catch(() => {
            setState({
                data: null,
                loading: false,
                error: 'no se pudo cargar la info'
            })
        })

    }, [url])

    return state;
}