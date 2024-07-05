import { heroes } from "../data/heroes";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsAsyncComponent = async( element ) => {

    const heroGenerator =  getHeroGenerator();
    let isFinished =  false; //Si tiene valores de héroes, es false. No está terminado

//En funciones generadoras podemos usar cualquier tipo de ciclo
    do {
        const { value, done } = await heroGenerator.next();
        isFinished =  done;
        if ( isFinished ) break; //Si hemos terminado, break(paramos)

        console.log({value, done});

        element.innerHTML = value;

    } while( !isFinished ) //Ponemos la negación porque pedimos que haga todo el 
    //'do' mientras hayan héroes (el isFinished es false)

}

async function* getHeroGenerator() {
    for ( const hero of heroes ) {
        await sleep(); //Esto va a hacer que espere un segundo entre cada llamada
        yield hero.name;
    }
    return 'No hay más'; //Si no ponemos esto, da undefined.
}


const sleep = () => {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    })
}