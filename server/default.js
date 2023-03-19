import { products }  from './constant/data.js';
import Product from './model/product-schema.js';

const DefaultData = async() =>{
    try {
        await Product.insertMany(products);
        console.log("Data imported sucessfully")
    } catch (error) {
        console.log("error is coming to inserting the data", error.message);
    }
}

export default DefaultData;