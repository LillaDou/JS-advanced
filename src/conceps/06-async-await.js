import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element Elemento HTML
 */
export const asyncAwaitComponent = async( element ) => {

  const id1 = '5d86371f2343e37870b91ef1';
  const id2 = '5d86371f25a058e5b1c8a65e';

  try {
    const hero1 =  await findHero( id1 );
    const hero2 =  await findHero( id2 );
    //El await es como decir: espera a que el resultado de la función findHero termine, 
    //y cuando termine, el producto de esa promesa será el valor de hero1
  
    element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
  
  } catch (error) {
      element.innerHTML = error;
  }
  //Con el try y catch indicamos si algo sale mal. En este caso, hace la prueba
  //de los nombres de los héroes. En caso de que no funcione, muestra en pantalla 
  //cuál ha sido el error. 
  
}


const findHero = async( id ) => {

  const hero = heroes.find( hero => hero.id === id );
  if ( !hero )
    throw `Hero not found`;

  return hero;

}