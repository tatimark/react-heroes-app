import { heroes } from "../data/heroes";


export const getHeroesByName = (name = '') => {

    //si no recibo ningún string
    if (name === '') {
        return [];
    }
    name = name.toLocaleLowerCase(); // para pasar a minúscula el que recibe
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))

}