import mongoose from 'mongoose';
const productSchema=new mongoose.Schema({   
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        unique:true
    },
    description:{
        type:String,
        required:[true,"Description is required"],
    },
    price:{
        type:Number,
        min:[0,"Price must be greater than 0"],
        required:[true,"Price is required"],
    },
    image:{
        type:String,
        required:[true,"Image is required"],
    },
    category:{
        type:String,
        required:[true,"Category is required"],
    },
    stock:{
        type:Number,
        default:0,
    },
   isFeatured:{
        type:Boolean,
        default:false,
    }, 
    ratings:{
        type:Number,
        default:0,
    },
    numReviews:{
        type:Number,
        default:0,
    }
},{timestamps:true});
const Product=mongoose.model("Product",productSchema);
export default Product; 