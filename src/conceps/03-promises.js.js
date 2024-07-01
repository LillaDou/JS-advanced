import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element Elemento HTML
 */
export const promiseComponent = ( element ) => {


  
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = ( id ) => {

  return new Promise( ( resolve, reject ) => {

    const hero =  heroes.find( hero => hero.id === id );

    if ( hero ) {
      resolve( hero );
      return;
    } 

    reject(`Hero with id ${ id } not found`);

  });

}