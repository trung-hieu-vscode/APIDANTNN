const petModel = require('../models/petModel')
const specieModel = require('../models/specieModel')

const getByIdSpecie = async (idSpecie) => {
    try {
        let result = await petModel.find({ idspecies: idSpecie }).populate('idspecies')
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
            const pets = await petModel.find({ idspecies: species[i]._id }).populate('idspecies')
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
        const pets = await petModel.find().populate(['idspecies', 'idUser'])

        return pets
    } catch (error) {
        console.log('get by id specie service error: ', error)
        return false
    }
}
const approvePet = async (id) => {
    try {
        const pet = await petModel.findById(id)

        if (!pet) {
            return false
        }

        pet.status = "approved";
        await pet.save();
        return pet
    } catch (error) {
        console.log('get by id specie service error: ', error)
        return false
    }
}
const rejectPet = async (id) => {
    try {
        const pet = await petModel.findById(id)

        if (!pet) {
            return false
        }

        pet.status = "rejected";
        await pet.save();
        return pet
    } catch (error) {
        console.log('get by id specie service error: ', error)
        return false
    }
}

const deletePet = async (petId) => {
    try {
        const pet = await petModel.findByIdAndDelete(petId);

        return pet
    } catch (error) {
        console.log('get by id specie service error: ', error)
        return false
    }
}


module.exports = {
    getByIdSpecie,
    getPetByIdCategory,
    getAllPet,
    approvePet,
    rejectPet,
    deletePet
}