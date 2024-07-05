

/**
 * 
 * @param {HTMLDivElement} element Elemento HTML
 */
export const asyncAwait2Component = async( element ) => {

  console.time('Start');

  // const value1 = await slowPromise();
  // const value2 = await mediumPromise();
  // const value3 = await fastPromise();
  //Estas promesas son independientes entre si, pero al usar el await, tenemos
  //que esperar mucho tiempo a que se ejecuten. Pues se ejecuta primero el slow, 
  //luego el medium y por último el fast. Se tarda aprox 4 segundos y ralentiza el programa. 

  //Para solucionar ese problema, los llamamos con el promise.all.
  //De esta manera, se ejecutan todas de manera simultánea(a la vez)
  //El tiempo en procesarlo todo es 2 segundos aprox, pues espera a que se
  //cada una de las promesas sea resuelta. Y la que más tiempo tarda es el slow. 
  const [ value1, value2, value3 ] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]);
  



  element.innerHTML = `
    value1: ${ value1 } <br/>
    value2: ${ value2 } <br/>
    value3: ${ value3 } <br/>
  `;

  console.timeEnd('Start');
  
}


const slowPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve('Slow Promise');
  }, 2000 );
})

const mediumPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve('Medium Promise');
  }, 1500 );
})

const fastPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve('Fast Promise');
  }, 1000 );
})