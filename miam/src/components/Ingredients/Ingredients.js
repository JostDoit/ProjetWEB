import React, { useState } from 'react';
import './Ingredients.css'; // Importation des styles CSS spécifiques au composant IngredientsManager

const IngredientsManager = () => {
    const [inputValue, setInputValue] = useState(''); // État pour stocker la valeur de l'entrée de recherche
    const [ingredients, setIngredients] = useState([]); // État pour stocker la liste des ingrédients

    // Fonction pour gérer l'ajout d'un ingrédient
    const handleAddIngredient = () => {
        if (inputValue.trim() !== '') {
            setIngredients([...ingredients, inputValue]); // Ajoutez la nouvelle valeur à la liste des ingrédients
            setInputValue(''); // Réinitialisez la valeur de l'entrée de recherche après l'ajout
        }
    };

    // Fonction pour gérer la suppression d'un ingrédient
    const handleRemoveIngredient = (index) => {
        const updatedIngredients = [...ingredients]; // Créez une copie de la liste des ingrédients
        updatedIngredients.splice(index, 1); // Supprimez l'ingrédient à l'index spécifié
        setIngredients(updatedIngredients); // Mettez à jour la liste des ingrédients
    };

    // Fonction pour gérer l'appui sur la touche "Entrée"
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddIngredient();
        }
    };

    return (
        <div className="ingredients-manager">
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown} // Gérer l'appui sur la touche "Entrée"
                    placeholder="Ajouter un ingrédient..."
                />
                <button onClick={handleAddIngredient}>Ajouter</button>
            </div>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                        <button onClick={() => handleRemoveIngredient(index)}>&times;</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IngredientsManager;

