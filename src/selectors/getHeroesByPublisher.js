import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']; //si la persona escribe un publisher que no es aceptado da error
    if (!validPublishers.includes(publisher)) { //si no lo encuentra
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}