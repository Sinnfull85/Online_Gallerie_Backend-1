const galleryData = require('../models/galleryData')




const getGalleryData = async (req, res, next) => {
  const { itemOffset, limit, beginYear, endYear } = req.query
  if (beginYear && endYear) {
    try {
      const data = await galleryData
        .find({ objectBeginDate: { $gte: beginYear, $lt: endYear } })
        .sort({ _id: 1 })
        .skip(itemOffset)
        .limit(limit)
      res.json(data)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  } else {
    try {
      const data = await galleryData
        .find({})
        .sort({ _id: 1 })
        .skip(itemOffset)
        .limit(limit)
      res.json(data)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}

const getOneData = async (req,res,next)=>{
  try {
    const data = await galleryData
      .find({ _id: req.params.id })
      
    res.json(data[0])
    
  } catch (e) {
    console.log(e)
  }
}

const getSearchedData = async (req,res,next)=>{
  try {
    console.log(111)
    const data = await galleryData
      .find({ title: { "$regex": req.query.q, "$options": "i" } })
      console.log(222222)

    res.json(data)
    
  } catch (e) {
    console.log(e)
  }
}




module.exports = {
  getGalleryData,getOneData,getSearchedData
  
}
