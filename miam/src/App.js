import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css'; // Importation des styles globaux de l'application

const App = () => {
    return (
        <div className="app">
            <Header />
            <Home />
        </div>
    );
}
