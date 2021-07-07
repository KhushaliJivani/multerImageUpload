'use strict';
const express=require("express");
const {upload}=require("../Helper/helper");
const controller=require("../Controller/fileuploadcontroller");
const router=express.Router();

router.post('/singleFile',upload.single('file'),controller.singleFileUpload);

module.exports=router;