const petService = require('../services/petService')


const getByIdSpecie = async (req, res, next) => {
    try {
        const { idSpecie } = req.query;
        const pets = await petService.getByIdSpecie(idSpecie)
        if (pets) {
            return res.status(200).json({ result: true, message: 'get by id specie specie successfully', pets })
        }
        return res.status(400).json({ result: false, message: 'get by id specie specie unsuccess', })
    } catch (error) {
        console.log('get by id specie controller error:', error)
        return res.status(500).json({ result: false, message: 'get by id specie error' })
    }
}


const getPetByIdCategory = async (req, res, next) => {
    try {
        const { idCategory } = req.query;
        const pets = await petService.getPetByIdCategory(idCategory)
        if (pets) {
            return res.status(200).json({ result: true, message: 'get by id category  successfully', pets })
        }
        return res.status(400).json({ result: false, message: 'get by id category  unsuccess', })
    } catch (error) {
        console.log('get by id specie controller error:', error)
        return res.status(500).json({ result: false, message: 'get by id category error' })
    }
}
const getAllPet = async (req, res, next) => {
    try {
        const pets = await petService.getAllPet()
        if (pets) {
            return res.status(200).json({ result: true, message: 'get all pet successfully', pets })
        }
        return res.status(400).json({ result: false, message: 'get all pet unsuccess', })
    } catch (error) {
        console.log('get by id specie controller error:', error)
        return res.status(500).json({ result: false, message: 'get all pet error' })
    }
}



module.exports = {
    getByIdSpecie, getPetByIdCategory, getAllPet
}