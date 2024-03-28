import React from 'react';
import './BoutonPhoto.css'; // Importation des styles CSS spécifiques au composant Header

const BoutonPhoto = () => {
    return(
        <div className="button-container">
            <button className="custom-button">
                Prendre une photo de mon frigo
                <img src="icone-appareil-photo.png" alt="Appareil photo" className="icon" />
            </button>
        </div>
    )
}

export default BoutonPhoto