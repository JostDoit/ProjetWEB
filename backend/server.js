// server.js

// first we import our dependencies…
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Ingredient = require("./model/ingredient");
const Stock = require("./model/stock");
const Recette = require("./model/recette");

// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;
// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// route requete de tous les ingrédients
router.get('/ingredients', (req, res) => {
  Ingredient.find()
    .then(ingredient => {
      res.json({ success: true, data: ingredient });
    })
    .catch(err => {
      res.json({ success: false, data: { error: err } });
    });
});

// route requete du stock
router.get('/stocks', (req, res) => {
  Stock.find()
    .then(stock => {
      res.json({ success: true, data: stock });
    })
    .catch(err => {
      res.json({ success: false, data: { error: err } });
    });
});

// route requete des recettes
router.get('/recettes', (req, res) => {
  Recette.find()
    .then(recette => {
      res.json({ success: true, data: recette });
    })
    .catch(err => {
      res.json({ success: false, data: { error: err } });
    });
});

// route pour récupérer les recettes contenant un certain ingrédient
router.get('/recettes/contenant/:ingredient', (req, res) => {
  const ingredientRecherche = req.params.ingredient;

  Recette.find({ ingredients: ingredientRecherche })
    .then(recettes => {
      res.json({ success: true, data: recettes });
    })
    .catch(err => {
      res.json({ success: false, data: { error: err } });
    });
});

// Route pour récupérer la recette contenant le plus d'ingrédients du stock
router.get('/recettes/max-ingredients-du-stock', (req, res) => {
  // récupérer tous les noms d'ingrédients du stock
  Stock.find({}, 'nom')
    .then(ingredientsDuStock => {
      // Extraire les noms d'ingrédients sous forme de tableau
      const nomsIngredientsDuStock = ingredientsDuStock.map(ingredient => ingredient.nom);

      // Rechercher les recettes qui contiennent au moins un ingrédient du stock
      Recette.find({ ingredients: { $in: nomsIngredientsDuStock } })
        .then(recettes => {
          // Trier les recettes par nombre d'ingrédients correspondants, en ordre décroissant
          recettes.sort((a, b) => {
            return b.ingredients.filter(ingredient => nomsIngredientsDuStock.includes(ingredient)).length -
                   a.ingredients.filter(ingredient => nomsIngredientsDuStock.includes(ingredient)).length;
          });

          // Renvoyer la première recette (celle avec le plus grand nombre d'ingrédients du stock)
          res.json({ success: true, data: recettes[0] });
        })
        .catch(err => {
          res.json({ success: false, data: { error: err } });
        });
    })
    .catch(err => {
      res.json({ success: false, data: { error: err } });
    });
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

// Liaison a la base de donnée
mongoose.connect("mongodb://localhost:3010/");
var db = mongoose.connection;
db.on('error', () => console.error('Erreur de connexion'));