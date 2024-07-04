

/**
 * 
 * @param {HTMLDivElement} element Elemento HTML
 */
export const promiseRaceComponent = ( element ) => {

  element.innerHTML = 'Loading...';

  const renderValue = ( value ) => {
    element.innerHTML = value;
  }

  Promise.race([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]).then(renderValue);
  
}


//Promesas
const slowPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve('Slow Promise');
  }, 2000 );
})
//setTimeout: sirve para emitir el resolve en un tiempo determinado. 
//En este caso, en dos segundos

const mediumPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve('Medium Promise');
  }, 3500 );
})

const fastPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve('Fast Promise');
  }, 3000 );
})