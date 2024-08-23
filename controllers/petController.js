const petService = require('../services/petService')


const getByIdSpecie = async (req, res, next) => {
    try {
        const { idSpecie } = req.query;
        const pets = await petService.getByIdSpecie(idSpecie)
        if (pets) {
            return res.status(200).json({ result: true, message: 'get by id specie specie successfully', data: pets })
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
            return res.status(200).json({ result: true, message: 'get by id category  successfully', data: pets })
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

const approvePet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await petService.approvePet(id);

        if (!pet) {
            return res.status(400).json({ message: 'Bài viết không tồn tại' });
        }

        return res.json({ status: 'success', message: 'Bài viết đã được duyệt', updatedPet: pet });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi duyệt bài viết', error: error.message });
    }
};

const rejectPet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await petService.rejectPet(id);

        if (!pet) {
            return res.status(400).json({ message: 'Bài viết không tồn tại' });
        }

        return res.json({ status: 'success', message: 'Bài viết đã bị từ chối', updatedPet: pet });
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi khi từ chối bài viết', error: error.message });
    }
}

const deletePet = async (req, res, next) => {
    const petId = req.params.id;

    try {
        const deletedPet = await petService.deletePet(petId)

        if (!deletedPet) {
            return res.status(404).json({ status: 0, message: "Không tìm thấy pet để xóa" });
        }

        return res.json({ status: 1, message: "Xóa pet thành công", deletedPet });
    } catch (error) {
        console.log("Lỗi khi xóa pet:", error);
        return res.status(500).json({ status: 0, message: "Lỗi khi xóa pet", error: error.message });
    }
}

module.exports = {
    getByIdSpecie, getPetByIdCategory, getAllPet, approvePet, rejectPet, deletePet
}