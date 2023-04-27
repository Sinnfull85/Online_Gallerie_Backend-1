const {Router}= require("express");
const galleryDataRouter =Router();

const {getGalleryData,getOneData,getSearchedData}=require("../controllers/galleyData")

galleryDataRouter
.get("/",getGalleryData)
.get("/search",getSearchedData)
.get("/:id",getOneData)


module.exports=galleryDataRouter;
