const express = require('express')
const router = express.Router();
const specieController = require('../controllers/specieController')

//create species
router.post('/create-specie', specieController.createSpecie)

router.post('/add-list-species', specieController.addListSpecies)

router.get('/get-by-idCategory', specieController.getByIdCategory)


module.exports = router;


