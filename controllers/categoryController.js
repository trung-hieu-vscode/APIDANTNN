const categoryService = require('../services/categoryService')

const getAllCategory = async (req, res, next) => {
    try {
        const categories = await categoryService.getAllCategory()
        if (categories) {
            return res.status(200).json({ result: true, message: 'get all category successfully', data: categories })
        }
        return res.status(400).json({ result: false, message: 'get all category unsuccess', })
    } catch (error) {
        console.log('get by id specie controller error:', error)
        return res.status(500).json({ result: false, message: 'get all category error' })
    }
}

module.exports = {
    getAllCategory
}