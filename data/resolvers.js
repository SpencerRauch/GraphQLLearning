import { Widgets } from "./dbConnectors";
//faux database
// class Product {
//     constructor(id, {name, description, price, soldout, stores, inventory}){
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.soldout = soldout;
//         this.stores = stores;
//         this.description = description;
//         this.inventory = inventory
//     }
// }

// const productData = {};

const resolvers = {
    // getProduct: ({id}) => {
    //     return new Product(id, productData[id]);
    // },
    // createProduct: ({input}) => {
    //     let id = require('crypto').randomBytes(10).toString('hex')
    //     productData[id] = input;
    //     return new Product(id,input)
    // }
    getProduct: async ({ id }) => {
        try {
            const product = await Widgets.findById(id);
            return product;
        } catch (error) {
            throw new Error(error);
        }
    },
    getAllProducts: async () => {
        try {
            return await Widgets.find();
        } catch (error) {
            throw new Error(error);
        }
    },
    createProduct: async ({ input }) => {
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores,
        });
        newWidget.id = newWidget._id;

        try {
            await newWidget.save();
            return newWidget;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateProduct: async ({ input }) => {
        try {
            const updateWidget = await Widgets.findOneAndUpdate({ _id: input.id }, input, { new: true });
            return updateWidget;
        } catch (error) {
            throw new Error(error);
        }
    },
    deleteProduct: async ({id}) => {
        try {
            await Widgets.findByIdAndDelete(id);
            return "Removal Success"
        } catch (error) {
            throw new Error(error);
        }
    }

};


export default resolvers;