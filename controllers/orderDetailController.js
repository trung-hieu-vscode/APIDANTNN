const orderDetailService = require('../services/orderDetailService')

const getAllOrderDetail = async (req, res, next) => {
    try {
        const data = await orderDetailService.getAllOrderDetail()
        if (data) {
            return res.status(200).json({ result: true, message: 'get all order detail successfully', data })
        }
        return res.status(400).json({ result: false, message: 'get all order detail unsuccess', })
    } catch (error) {
        console.log('get by id specie controller error:', error)
        return res.status(500).json({ result: false, message: 'get all order detail error' })
    }
}

const addOrderDetail = async (req, res, next) => {
    try {
        const { idoder, idpet, price } = req.body;
        console.log("check data: ", req.body)
        const orderDetail = await orderDetailService.addOrderDetail({ idoder, idpet, price })
        if (orderDetail) {
            return res.status(200).json({ result: true, message: 'add order detail successfully', data: orderDetail })
        }
        return res.status(400).json({ result: false, message: 'add order detail unsuccess', })
    } catch (error) {
        console.log('add order detail controller error:', error)
        return res.status(500).json({ result: false, message: 'add order detail error' })
    }

}

const deleteOrderDetail = async (req, res, next) => {
    const orderDetailId = req.params.id;
    try {
        const deletedOrderDetail = await orderDetailService.deleteOrderDetail(orderDetailId);


        if (!deletedOrderDetail) {
            return res.status(404).json({ status: 0, message: "Không tìm thấy order detail để xóa" });
        }

        res.json({ status: 1, message: "Xóa order detail thành công", deletedOrderDetail });
    } catch (error) {
        console.log("Lỗi khi xóa pet:", error);
        res.status(500).json({ status: 0, message: "Lỗi khi xóa order detail", error: error.message });
    }
}


module.exports = {
    getAllOrderDetail, addOrderDetail, deleteOrderDetail
}