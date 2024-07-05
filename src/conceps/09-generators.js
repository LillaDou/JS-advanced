
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {

    const myGenerator = myFirstGeneratorFunction();

    console.log( myGenerator.next() );//Primer valor done: false
    console.log( myGenerator.next() );//Segundo valor done: false
    console.log( myGenerator.next() );//Tercer valor done: false
    console.log( myGenerator.next() );//Cuarto valor done: false
    console.log( myGenerator.next() );//Ya no hay valores done: true
    console.log( myGenerator.next() );//undefined done: true

//La función generadora permite generar una secuencia de valores
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