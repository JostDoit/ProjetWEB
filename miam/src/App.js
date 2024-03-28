import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import BoutonPhoto from './components/BoutonPhoto/BoutonPhoto';
import BoutonIngredient from './components/BoutonIngredient/BoutonIngredient';
import './App.css'; // Importation des styles globaux de l'application

const App = () => {
    const ingredients = ["Farine", "Oeufs", "Lait", "Sucre", "Beurre"];

    return (
        <div className="app">
            <Header />
            <Home />
            <BoutonPhoto />
            <BoutonIngredient />
        </div>
    );
}

export default App;
