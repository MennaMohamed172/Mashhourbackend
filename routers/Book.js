const express = require('express')
const BookController = require('../controllers/BookController')
const auth = require('../middleware/auth')
const checkRole = require("../middleware/role.js")

const router = express.Router()
//routers for each function that found in articalControllers in controllers
router.post('/Book', auth,checkRole(Patient),BookController.BookNow)
router.get('/Book', auth,checkRole(Receptionist,Admin),BookController.getAllElement)
router.get('/Book/:id', auth,checkRole(Receptionist,Admin), BookController.getElmenetById)
router.put('/Book/:id', auth,checkRole(Receptionist,Admin), BookController.updateBookById)
router.delete('/Book/:id', auth,checkRole(Receptionist,Admin), BookController.deletById)

module.exports = router