const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const galleryDataSchema= new Schema({
    title:{
        type:String,
        require:true
    },
    period:{
        type:String
        
    },
    primaryImage:{
        type:String
        
    },
    primaryImageSmall:{
        type:String
        
    },
    classification:{
        type:String
        
    },
    objectDate:{
        type:String
        
    },
    medium:{
        type:String
        
    },
    dimensions:{
        type:String
        
    },
    objectURL:{
        type:String
        
    },
    artistDisplayName:{
        type:String
        
    },
    artistDisplayBio:{
        type:String
        
    },
    objectId:{
        type:String
        
    },

});
module.exports=mongoose.model("GalleryData",galleryDataSchema);