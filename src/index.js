import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

serviceWorkerRegistration.register();
