import React, {useState} from 'react';
import './BoutonIngredient.css'; // Importation des styles CSS spécifiques au composant Header

const BoutonIngredient = () => {

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

    return(
        <div className = "ingredients-mangager">
            <div className="search-bar">
                <input 
                    type="text" 
                    value = {inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown} // Gérer l'appui sur la touche "Entrée"
                    placeholder="Ajouter un ingrédient" 
                />
                <div className="ingredient-container">
                    <img src="icone-ingredient.png" alt="Ingrédient" className="ingredient-icon" />
                </div>
            </div>
            <ul>
                {ingredients.length > 0 && ( // Vérifier si la liste des ingrédients n'est pas vide 
                    <div className="mes-ingredients">
                        Mes ingrédients :
                    </div>
                )}
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                        <button onClick={() => handleRemoveIngredient(index)}>&times;</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BoutonIngredient