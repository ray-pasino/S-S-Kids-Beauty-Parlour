const express = require("express")
const sendMailrouter = express.Router()

const {sendMail} = require("../controllers/sendmailcontroller")

sendMailrouter.post("/sendEmail", sendMail)

module.exports = sendMailrouter