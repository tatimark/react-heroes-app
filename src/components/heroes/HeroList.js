import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {



   const heroes =  useMemo(() => getHeroesByPublisher( publisher ), [ publisher ])
 
  //const heroes = getHeroesByPublisher( publisher );
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => ( //parentesi s para retornar un objeto
                    <HeroCard 
                            key={hero.id}
                            { ...hero }
                    />
                ))
            }
            
        </div>
    )
}
//implementar en la página de dc o marvel