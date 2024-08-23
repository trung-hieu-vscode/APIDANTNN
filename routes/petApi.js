const express = require('express')
const router = express.Router();
const petController = require('../controllers/petController')

router.get('/get-all-pet', petController.getAllPet)

router.get('/get-by-idSpecie', petController.getByIdSpecie)

router.get('/get-by-idCategory', petController.getPetByIdCategory)

router.put('/approve/:id', petController.approvePet)

router.put('/reject/:id', petController.rejectPet)

router.delete('/delete/:id', petController.deletePet)


module.exports = router;


