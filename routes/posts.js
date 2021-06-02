const express = require('express')
const router = express.Router()
const Post = require('../models/posts')
const allControllers = require('../controllers/posts')

const {getControllers, postContoller, getController, updateController, deleteController} = allControllers

router.get('/',getControllers)

router.post('/', postContoller)

router.get('/:postid', getController)

router.put('/:postid', updateController)

router.delete('/:postid', deleteController)

module.exports = router
