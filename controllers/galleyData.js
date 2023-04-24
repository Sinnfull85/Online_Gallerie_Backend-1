const galleryData = require('../models/galleryData')

const getGalleryData = async (req, res, next) => {
  const {itemOffset,limit}=req.query;
  try {
    const data = await galleryData.find({}).sort({_id:1}).skip(itemOffset).limit(limit)
    res.json(data)
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

// const getGalleryData1200= async (req,res,next)=>{

// }

module.exports = {
  getGalleryData
}
