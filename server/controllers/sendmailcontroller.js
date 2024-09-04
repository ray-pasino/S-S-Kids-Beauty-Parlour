const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ray.pasino@gmail.com',
    pass: process.env.PASSWORD, // Ensure this is set in your .env file
  },
});

const sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: {
      name: name,
      address: email, // This will appear as the "from" address
    },
    to: 'Soadakukhalil89@gmail.com', // Receiver's email
    subject: 'Appointment at S&S Kids Beauty Parlour',
    text: message, // Email content
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent successfully');
    res.json({success:true, message:"Email Sent Successfully"})
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({success:false, message:"Failed To Send Email"})
  }
};

module.exports = { sendMail };
