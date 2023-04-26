const {Router}= require("express");
const galleryDataRouter =Router();

const {getGalleryData,getOneData}=require("../controllers/galleyData")

galleryDataRouter
.get("/",getGalleryData)
.get("/:id",getOneData)


module.exports=galleryDataRouter;
