import mongoose, { Mongoose } from "mongoose";

async function connectMongoDB(){
    try{
        await mongoose.connect('mongodb://localhost/widgets');
        console.log('Connected to widget db')
    } catch (error){
        console.log('Error', error)
    }
}

connectMongoDB();

const widgetScheme = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    soldout: String,
    inventory: Number,
    stores: Array
});

const Widgets = mongoose.model('widgets', widgetScheme);

export { Widgets };