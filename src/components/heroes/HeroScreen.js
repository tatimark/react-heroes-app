import React, { useMemo } from 'react'
import {  Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    //const params = useParams(); //extrae parametros que van por el url
    const { heroeId } = useParams();


    const hero =  useMemo(() => getHeroesById(heroeId), [ heroeId ])
    // const hero = getHeroesById(heroeId);
        // si manipulas la ruta en el navegador te lo coge como undefined y no te devuelve héroe
    if( !hero ) {
        return <Redirect to="/" />
    }// si el héroe no existe 

    const handleReturn = () =>{
        if( history.length <= 2){ // si copias la url directamente en incógnito al volver no te aparece nada
            history.push("/");
        }else{
            history.goBack();
            //  history.replace("/");
        }
    
        
    }

    const {  superhero, publisher, alter_ego, first_appearance, characters } = hero;
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${ heroeId }.jpg`}
                className="img-thumbnail animate__animated animate__fadeInLeft"
                alt={ superhero }
                />
            </div>
            <div className="col-8">
                <h3>{ superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b> Alter ego : </b>{ alter_ego}</li>
                    <li className="list-group-item"><b> Publisher : </b>{ publisher }</li>
                    <li className="list-group-item"><b> First appearance : </b>{ first_appearance }</li>
                </ul>

                <h5>Characters </h5>
                 <p>{ characters }</p>
                 <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                 >
                        Return
                 </button>

            </div>
        </div>
    )
}
