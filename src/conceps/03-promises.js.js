import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element Elemento HTML
 */
export const promiseComponent = ( element ) => {

  const renderHero = ( hero ) => {
    element.innerHTML = hero.name;
  }

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
      <h3>${hero1.name}</h3>
      <h3>${hero2.name}</h3>
    `;
  }

  const renderError = (error) => {
    element.innerHTML = `
      <h1>Error:</h1>
      <h3>${ error }</h3>`;
  }

  const id1 = '5d86371f25a058e5b1c8a65e';
  const id2 = '5d86371f233c9f2425f16916';
  
  //Promise Hell
  findHero( id1 )
    .then( (hero1) => {

      findHero( id2 )
        .then( (hero2) =>{
          renderTwoHeroes(hero1, hero2)
        })
        .catch( renderError);
    })
    .catch( renderError );

  //? findHero(id1)
  //?   .then( renderHero )
    // .then( superHero => renderHero( superHero) );
    // Cuando el argumento (superHero) también es lo que mandamos al argumento
    //de la función de renderHero, entonces se puede acortar y poner solo
    // el nombre de la función.
    // .catch( error => renderError( error ) );
    //? .catch( renderError );
  
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