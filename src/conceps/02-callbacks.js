import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element Elemento HTML
 */
export const callbacksComponent = ( element ) => {

    const id = '5d86371fd55e2e2a30fe1ccb1';
    findHero( id, (hero) => {
        element.innerHTML = hero.name;
    } );
    
}

/**
 * 
 * @param {String} id 
 * @param { (hero: Object)=> void } callback Argumento: hero. Es una función que no regresa nada
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );
    //.find para buscar a un heroe

    callback( hero );
}