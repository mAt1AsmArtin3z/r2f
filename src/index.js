import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Random from './Random';
import Galeria from './Galeria';
import Notas from './Notas';
import Click from './Click';
import reportWebVitals from './reportWebVitals';
import Formulario from './Formulario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Galeria />
    <Formulario />
    <Random />
    <Click />
    <Notas />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
