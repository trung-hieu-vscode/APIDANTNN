const specieService = require('../services/specieService')

const createSpecie = async (req, res, next) => {
    try {
        const { name, idCategory } = req.body;
        const specie = await specieService.createSpecie(name, idCategory)
        if (specie) {
            return res.status(200).json({ result: true, message: 'create specie successfully', specie })
        }
        return res.status(400).json({ result: false, message: 'create specie unsuccess', })
    } catch (error) {
        console.log('error create specie controller: ', error)
        return res.status(500).json({ result: false, message: 'create specie error' })

    }
}

const getByIdCategory = async (req, res, next) => {
    try {
        const idCategory = req.query
        const specie = await specieService.getByIdCategory(idCategory)
        if (specie) {
            return res.status(200).json({ result: true, message: 'get by id category successfully', specie })
        }
        return res.status(400).json({ result: false, message: 'get by id category unsuccess', })
    } catch (error) {
        console.log('error get by id category specie controller: ', error)
        return res.status(500).json({ result: false, message: 'get by id category error' })

    }
}
const addListSpecies = async (req, res, next) => {
    try {
        const specie = await specieService.addListSpecies(req.body)
        if (specie) {
            return res.status(200).json({ result: true, message: 'get by id category successfully', specie })
        }
        return res.status(400).json({ result: false, message: 'get by id category unsuccess', })
    } catch (error) {
        console.log('error get by id category specie controller: ', error)
        return res.status(500).json({ result: false, message: 'get by id category error' })

    }
}


module.exports = {
    createSpecie, getByIdCategory, addListSpecies
}