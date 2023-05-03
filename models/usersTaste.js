const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersTasteSchema = new Schema({
    userId: { type: String, required: true },
    paintingId: { type: String, required: true },
    paintingUrl:{ type: String, required: true },
    paintingTitle:{ type: String, required: true },
   
  },{
      collection:"usersTaste"
  })
  
  module.exports=mongoose.model("usersTaste",usersTasteSchema);