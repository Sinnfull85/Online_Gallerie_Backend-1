const {Router}= require("express");
const galleryDataRouter =Router();

const {getGalleryData,getGalleryData1200}=require("../controllers/galleyData")

galleryDataRouter
.get("/",getGalleryData)
// .get("/1200-1430",getGalleryData1200)

module.exports=galleryDataRouter;
