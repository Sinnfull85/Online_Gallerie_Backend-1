const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: { type: String, required: [true, 'Firstname is required'] },
  lastName: { type: String, required: [true, 'Lastname is required'] },
  email: { type: String, required: [true, 'Email image is required'] },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false
  },
  createdAt: { type: Date, default: Date.now }
},{
    collection:"users"
})

module.exports=mongoose.model("users",userSchema);
