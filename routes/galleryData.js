const {Router}= require("express");
const galleryDataRouter =Router();

const {getGalleryData,getOneData,getColor}=require("../controllers/galleyData")

galleryDataRouter
.get("/",getGalleryData)
.get("/:id",getOneData)



module.exports=galleryDataRouter;
