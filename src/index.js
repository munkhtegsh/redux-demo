import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'; //import Provider
import store from './store'; //import store
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
