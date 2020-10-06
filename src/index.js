import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter
} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-179077363-4');
  let page = window.location.pathname;
  // console.log(window.location.pathname);
  ReactGA.pageview(`/${page}`);
}

let pushState = window.history.pushState;
window.history.pushState = function () {
  initializeReactGA();
  pushState.apply(window.history, arguments);
};

ReactDOM.render(
  <HashRouter>
      <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
