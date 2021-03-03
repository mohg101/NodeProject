const Product = require("../model/productModel");

exports.showProducts = (req,res)=>{
    //res.send('<h1>Hello User</h1>');
    console.log(Product.fetch());
    res.render('layouts/home',{
        'pageTitle' : 'Shop Home!!!',
        'Products' : Product.fetch(),
    });
}

exports.getAddProduct = (req,res)=>{
    //res.send('<h1>Hello Admin</h1>');
    res.render('layouts/addProduct',{
        'pageTitle' : 'Admin'
    })
}

exports.postAddProduct =  (req,res)=>{
    const prod = new Product(req.body.productName, req.body.productPrice, req.body.productDescription);
    prod.save();

    res.redirect('/');
};
