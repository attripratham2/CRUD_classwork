const express = require('express')
const router = express.Router()

const studentController = require('../Controller/studentController')
router.get('/',studentController.index)
router.post('/getData',studentController.getData)
router.post('/createData',studentController.createData)
router.post('/updateData',studentController.updateData)
router.post('/deleteData',studentController.deleteData)

module.exports = router;
