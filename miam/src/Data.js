import React, { useState, useEffect, useRef } from 'react';

function Data() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    let pollInterval = useRef(null);
    
      const loadCommentsFromServer = () => {
        fetch('/api/ingredients/')
          .then(data => data.json())
          .then((res) => {
            if (!res.success) setError(res.error);
            else setData(res.data);
            });
        }
    
    useEffect(() => {

        loadCommentsFromServer();

        if (!pollInterval.current) {
            pollInterval.current = setInterval(loadCommentsFromServer, 2000);
        }
        return () => {
            if (pollInterval.current) clearInterval(pollInterval.current);
            pollInterval.current = null;
        };
    }, []);

  return (
    <div>
      <h2>Liste d'ingrédients :</h2>
      {error ? (
        <p>Erreur : {error}</p>
      ) : (
      <ul>
        {data.map((ingredient, index) => (
          <li key={index}>{ingredient.nom}</li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default Data;