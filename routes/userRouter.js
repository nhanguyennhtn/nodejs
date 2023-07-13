const router = require('express').Router()
const { userController } = require('../controller')

const useRoutes = app => {
    router.post('/create', userController.userCreate)
    router.post('/login', userController.userLogin)
    return app.use('/api/user', router) 
}

module.exports = useRoutes