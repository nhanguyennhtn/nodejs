const { userModel } = require('../model')
const bcrypt = require('bcryptjs')

const userController = {
    userCreate: (req, res, next) => {
        const { userName, password } = req.body
        if (!userName || !password)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đủ thông tin!!!'
            })
        userModel.findOne({ userName })
            .then(user => {
                if (user) return res.status(500).json({ errMessage: 'Tên tài khoản đã tồn tại.' })

                const passwordHash = bcrypt.hashSync(password, 8)
                const newUser = new userModel({
                    userName,
                    password: passwordHash,
                })

                newUser.save()
                    .then(user => {
                        const userInfo = user.toObject()
                        delete userInfo.password
                        return res.status(500).json({ user: userInfo })
                    })
                    .catch(next)
            })
            .catch(next)
    },
    userLogin: (req, res, next) => {
        const { userName, password } = req.body
        if (!userName || !password)
            return res.status(500).json({ errMessage: 'Tên hoặc mật khẩu không tồn tại.' })

        userModel.findOne({ userName })
            .then(user => {
                if (!user) return res.status(500).json({ errMessage: 'Tên tài khoản không tồn tại.' })

                const rs = bcrypt.compareSync(password, user.password)
                if (!rs)
                    return res.status(500).json({ errMessage: 'Mật khẩu không chính xác.' })

                const userInfo = user.toObject()
                delete userInfo.password
                return res.status(500).json({ user: userInfo })
            })
            .catch(next)
    },
    userUpdate: (req, res, next) => {
        const { userName, password } = req.body
        const _id = req.params._id

        if (!_id || !userName || !password)
            return res.status(500).json({ errMessage: 'Vui Lòng điền đầy đủ thông tin' })


    }

}

module.exports = userController