import * as React from "react";
import ReactDOM from 'react-dom';
import {
  HashRouter
} from 'react-router-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    root
  );
});
