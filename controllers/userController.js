const userService = require('../services/userService')

const userLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await userService.userLogin(username, password)
        if (user) {
            return res.status(200).json({ result: true, login: user.login, message: user.message, user: user?.user[0] })
        }
        return res.status(400).json({ result: false, message: 'login fail' })

    } catch (error) {
        console.log('login error controller: ', error)
        return res.status(500).json({ result: false, message: 'login error' })
    }
}

const getAllUser = async (req, res, next) => {
    try {
        const user = await userService.getAllUser()
        if (user) {
            return res.status(200).json({ result: true, message: "get all user success", users: user })
        }
        return res.status(400).json({ result: false, message: 'get all user unsuccess' })

    } catch (error) {
        console.log('login error controller: ', error)
        return res.status(500).json({ result: false, message: 'login error' })
    }
}


module.exports = {
    userLogin, getAllUser
}