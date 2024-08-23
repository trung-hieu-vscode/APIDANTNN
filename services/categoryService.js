const categoryModel = require('../models/categoryModel')

const getAllCategory = async () => {
    try {
        const categories = await categoryModel.find()

        return categories
    } catch (error) {
        console.log('get all category service error: ', error)
        return false
    }
}

module.exports = {
    getAllCategory
}