var express = require("express");
var { inputVal, getDietVal } = require("../controller/inputControllers");

const router = express.Router()

router.post('/inputVal', inputVal)
router.get('/getDietVal/:id', getDietVal)

module.exports = router