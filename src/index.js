import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById("root");;

let render = () => {
    ReactDOM.render(<App />, rootEl)
}

if(module.hot){
    module.hot.accept('./app/App', () => {
        setTimeout(render);
    })
}

render();

serviceWorker.unregister();
