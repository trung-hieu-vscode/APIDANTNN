const petModel = require('../models/petModel')
const specieModel = require('../models/specieModel')

const getByIdSpecie = async (idSpecie) => {
    try {
        let result = await petModel.find({ idspecies: idSpecie })
        const species = await specieModel.findById(idSpecie).populate('idCategory')
        // for (let i = 0; i < result.length; i++) {
        //     result[i].idspecies = species;
        // }
        // console.log(species)
        const data = { 'species': species, 'pets': result }

        return data
    } catch (error) {
        console.log('get by id specie service error: ', error)
        return false
    }
}
const getPetByIdCategory = async (idCategory) => {
    try {
        const species = await specieModel.find({ idCategory: idCategory })
        let result = []
        for (let i = 0; i < species.length; i++) {
            const pets = await petModel.find({ idspecies: species[i]._id })
            result = result.concat(pets)
        }

        return result
    } catch (error) {
        console.log('get by id specie service error: ', error)
        return false
    }
}

const getAllPet = async () => {
    try {
        const species = await petModel.find().populate(['idspecies', 'idUser'])

        return species
    } catch (error) {
        console.log('get by id specie service error: ', error)
        return false
    }
}


module.exports = {
    getByIdSpecie,
    getPetByIdCategory,
    getAllPet
}