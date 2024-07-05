
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log( myGenerator.next() );//Primer valor done: false
    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append( button );

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${ value }`;
    }

    button.addEventListener('click', renderButton );

    //Hemos creado un contador de las veces que hacemos click en el botón

}

function* idGenerator( ) {

    let currentId = 0;
    while(true) {
        yield ++currentId;
    }

}

function* myFirstGeneratorFunction() {

    yield 'Primer valor';
    //Es como un return
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';


    return 'Ya no hay valores';
    yield 'Ya no pueden hacer nada';
}