const orderDetailModel = require('../models/orderDetailModel')

const getAllOrderDetail = async () => {
    try {
        const orderDetails = await orderDetailModel.find().populate(['idoder', 'idpet'])
        return orderDetails
    } catch (error) {
        console.log('get all order detail service error: ', error)
        return false
    }
}
const addOrderDetail = async (idoder, idpet, price) => {
    try {
        const orderDetails = new orderDetailModel(idoder, idpet, price);
        await orderDetails.save();
        return orderDetails
    } catch (error) {
        console.log('get all order detail service error: ', error)
        return false
    }
}

const deleteOrderDetail = async (orderDetailId) => {
    try {
        const orderDetails = await orderDetailModel.findByIdAndDelete(orderDetailId);
        return orderDetails
    } catch (error) {
        console.log('delete order detail service error: ', error)
        return false
    }
}

module.exports = {
    getAllOrderDetail, addOrderDetail, deleteOrderDetail
}