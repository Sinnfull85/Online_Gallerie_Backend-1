const {Router}= require("express");
const galleryDataRouter =Router();

const {getGalleryData}=require("../controllers/galleyData")

galleryDataRouter.get("/",getGalleryData)

module.exports=galleryDataRouter;
