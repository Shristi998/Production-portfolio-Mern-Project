
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

//transport
const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:process.env.API_SENDGRID
    }
})
);

const sendEmailController = (req,res) => {
    try{
        const {name,email,msg} = req.body;

        //validation
if(!name || !email || !msg){
    return res.status(500).send({
        success:false,
        message:"Please Fill All The Fields"
    })
}

//email matter
transporter.sendMail({
to:"dshristi27@gmail.com",
from:"dshristi27@gmail.com",
subject:"Regarding Mern Portfolio App",
html:`<h5>Detail information</h5>
<ul>
<li><p>Name: ${name}</p></li>
<li><p>Email: ${email}</p></li>
<li><p>Message: ${msg}</p></li>
</ul>
`
})

        return res.status(200).send({
            success:true,
            message:"Your Message Send Successfully"
        })

    }
    catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Send Email API  Error",
            error
        })
    }
};

    module.exports={sendEmailController};