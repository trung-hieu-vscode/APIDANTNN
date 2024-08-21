const specieModel = require('../models/specieModel')

const createSpecie = async (name, idCategory) => {
    try {
        const create = new specieModel({ name: name, idCategory: idCategory })
        const result = create.save()
        return result
    } catch (error) {
        console.log('create specie service error: ', error)
        return false
    }
}

const getByIdCategory = async (idCategory) => {
    try {
        const result = await specieModel.find(idCategory)

        return result
    } catch (error) {
        console.log('get by id category specie service error: ', error)
        return false
    }
}
const addListSpecies = async (data) => {
    try {
        for (let i = 0; i < data.name.length; i++) {
            const create = new specieModel({ name: data.name[i], idCategory: data.idCategory })
            const result = create.save()
        }

        return true
    } catch (error) {
        console.log('create specie service error: ', error)
        return false
    }
}

module.exports = {
    createSpecie, getByIdCategory, addListSpecies
}