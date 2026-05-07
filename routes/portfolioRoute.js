const expresss=require('express');
const {sendEmailController}=require('../controllers/portfoliocontroller');

//router object
const router=expresss.Router();

//routes
router.post('/sendEmail',sendEmailController);

//export
module.exports=router;