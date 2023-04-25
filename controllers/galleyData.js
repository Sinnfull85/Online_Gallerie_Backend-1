const galleryData = require('../models/galleryData')

const getGalleryData = async (req, res, next) => {
  const { itemOffset, limit, beginYear, endYear } = req.query
  if (beginYear && endYear) {
    try {
      const data = await galleryData
        .find({ objectBeginDate: { $gt: 1000, $lt: 1430 } })
        .sort({ objectBeginDate: 1 })
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



module.exports = {
  getGalleryData,
  
}
