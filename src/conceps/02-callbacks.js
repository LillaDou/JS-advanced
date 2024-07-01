import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element Elemento HTML
 */
export const callbacksComponent = ( element ) => {

    const id = '5d86371fd55e2e2a30fe1ccb1';
    findHero( id, ( error, hero) => {

        //Si el error existe...
        if ( error ) {
            element.innerHTML = error; 
            return;
        }

        element.innerHTML = hero.name;

        // element.innerHTML = hero?.name || 'No hay héroe';
        //'?': Si el heroe existe/tiene valor, busca la propiedad .name.
        //Si no tiene valor, será undefined
    } );
    
}

/**
 * 
 * @param {String} id 
 * @param { (error?: String, hero: Object)=> void } callback Argumento: error (si hay un error: undefined), 
 * hero (objecto). Es una función que no regresa nada
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );
    //.find para buscar a un heroe

    //Validación para ver si hay algún error.
    if ( !hero ) {
        callback(`Hero with id ${ id } not found.`);
        return; // undefined;
    }

    callback( null, hero );
    //Ponemos null porque debemos dar dos argumentos a la función: un 'error'
    // y luego el hero (ver documentación de findHero)
}