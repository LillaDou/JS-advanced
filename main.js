import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { environmentsComponent } from './src/conceps/01-environments';
import { callbacksComponent } from './src/conceps/02-callbacks';
import { promiseComponent } from './src/conceps/03-promises.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">


    </div>
    
  </div>
`;

const element = document.querySelector('.card');
//El element es el elemento HTML en el cual queremos hacer la inserción. 
// environmentsComponent(element);
// callbacksComponent( element );
promiseComponent( element );