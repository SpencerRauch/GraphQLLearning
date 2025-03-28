//faux database
class Product {
    constructor(id, {name, description, price, soldout, stores}){
        this.id = id;
        this.name = name;
        this.price = price;
        this.soldout = soldout;
        this.stores = stores;
        this.description = description;
    }
}

const productData = {};

const resolvers = {
    getProduct: ({id}) => {
        return new Product(id, productData[id]);
    },
    createProduct: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex')
        productData[id] = input;
        return new Product(id,input)
    }
}


export default resolvers;