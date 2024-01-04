const nodemailer = require("nodemailer");
// Import NodeMailer (after npm install)

// Async function enables allows handling of promises with await

// First, define send settings by creating a new transporter:
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
  port: 587, // Port for SMTP (usually 465)
  secure: false, // Usually true if connecting to port 465
  auth: {
    user: "akashakke4@gmail.com", // Your email address
    pass: "**** **** **** ****", // Password (for gmail, your app password)
    // ⚠️ For better security, use environment variables set on the server for these values when deploying
  },
});

const mailOptions = {
  from: {
    name: "Akash Praveen R",
    address: "akashakke4@gmail.com",
  },
  //   from: '"Akash Praveen R" <akashakke4@gmail.com>',
  to: ["akashpraveen576@gmail.com"], // Your email address
  subject: "Testing, testing, 123",
  text: "Hello, world",
  html: "<b>Hello, world</b>",
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email has been sent successfully");
  } catch (error) {
    console.log(error);
  }
};

sendMail(transporter, mailOptions);
