import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Data from './Data'

const ingredients = ['Farine', 'Oeufs', 'Lait', 'Sucre', 'Beurre'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Data ingredients={ingredients}/>
  </React.StrictMode>
);