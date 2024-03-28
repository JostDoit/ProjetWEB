const Home = () => {
    const handleOpenCamera = () => {
        // Demander l'autorisation pour accéder à la caméra
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                // La caméra est accessible, faites quelque chose comme afficher un message
                console.log("Caméra ouverte !");
            })
            .catch(error => {
                // Une erreur s'est produite lors de l'accès à la caméra
                console.error("Erreur lors de l'ouverture de la caméra :", error);
            });
    };

    // return (
    //     <div className="home">
    //         <button onClick={handleOpenCamera}>What can I cook ?</button>
    //         {/* Autres éléments de la page d'accueil */}
    //     </div>
    // );
}

export default Home;
