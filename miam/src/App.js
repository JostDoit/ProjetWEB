import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css'; // Importation des styles globaux de l'application
import IngredientsList from './components/Ingredients/Ingredients';

const App = () => {
    const ingredients = ["Farine", "Oeufs", "Lait", "Sucre", "Beurre"];

    return (
        <div className="app">
            <Header />
            <Home />
            <IngredientsList ingredients={ingredients} />
        </div>
    );
}

export default App;
