import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './views/Root/Root';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./store";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    position: 'bottom left',
    timeout: 5000,
    offset: '20px',
    transition: 'scale',

}

ReactDOM.render(
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
             <Root/>
      </AlertProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


