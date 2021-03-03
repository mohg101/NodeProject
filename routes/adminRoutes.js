const router = require('express').Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

const { getAddProduct, postAddProduct } = require('../controllers/productController');

router.get('/admin/addProduct', getAddProduct);

router.post('/admin/addProduct', postAddProduct);





module.exports = router;