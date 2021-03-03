const Products = [];    

module.exports = class Product{
    constructor(title,price,desc)
    {
        this.title = title;
        this.price = price;
        this.desc = desc;
    }

    save()
    {
        Products.push(this);
    }

    static fetch()
    {
        return Products;
    }
}