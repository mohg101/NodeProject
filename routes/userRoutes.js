//The express.Router() function is used to create a new router object. 
//This function is used when you want to create a new router object in your program to handle requests.
const router = require('express').Router();

const { showProducts} = require('../controllers/productController');

router.get('/', showProducts);

module.exports = router;