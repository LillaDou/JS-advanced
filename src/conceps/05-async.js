import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element Elemento HTML
 */
export const asyncComponent = ( element ) => {

  const id1 = '5d86371fd55e2e2a30fe1ccb';
  console.log('Inicio de componente');

  findHero( id1 )
    .then( name => element.innerHTML = name )
    .catch( error => element.innerHTML = error );

  console.log('Fin del componente');

}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async( id ) => {

  const hero = heroes.find( hero => hero.id === id );
  if ( !hero )
    throw `Hero with id ${ id } not found`;

  return hero.name;
  //Este return indica que la promesa siempre va a salir bien. 
  //Es por ello por lo que debemos poner una verificación antes,
  //para asegurarnos de que realmente es correcto. 

}