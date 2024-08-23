const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

const userLogin = async (username, password) => {
    try {
        // username = username.toLowerCase().replace(/\s/g, '');
        const user = await userModel.find({ username: username });
        let data = {}
        if (user) {
            // const hash = await bcrypt.hash(password, 10);
            // const match = hash == user[0].password ? true : false

            const match = await bcrypt.compare(password, user[0].password);
            if (match) {
                console.log('login success')
                data = {
                    "login": true,
                    "message": "Đăng nhập thành công",
                    "user": user,
                }
            } else {
                data = { "login": false, "message": "Tài khoản hoặc  mật khẩu không đúng" }
            }
        } else {
            data = { "login": false, "message": "Tài khoản không tồn tại" }

        }
        return data
    } catch (error) {
        console.log("error user login service: ", error)
        return false
    }
}

const getAllUser = async () => {
    try {
        const users = await userModel.find();
        return users
    } catch (error) {
        console.log("error get all user service: ", error)
        return false
    }
}

module.exports = {
    userLogin, getAllUser
}