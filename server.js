// const express = require("express");
// const cors = require("cors");
// const router=express.Router();
// const nodemailer = require("nodemailer");


// const app = express();
// app.use(cors());
// app.use("/",router)
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "aa8564073595@gmail.com",
//     pass:  "examihohkeilepzj",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });
// // router.post("/contact",async(req,res)=>{
// //   console.log(req.body.firstName);
// //   try{
// //       console.log("hi")
// //   }catch(err){
// //     console.log("reject");

// //   }
// // })
// // router.post("/contact", (req, res) => {
// //   console.log("hey")
// //   // console.log(req.body);
// //   // console.log(req.body.firstName);
// //   const { firstName, lastName, email, message, phone } = req.body;
// //   const name = firstName + " " + lastName;
// //   const mail = {
// //     from: name,
// //     to: "aa8564073595@gmail.com",
// //     subject: "Contact Form Submission - Portfolio",
// //     html: `<p>Name: ${name}</p>
// //            <p>Email: ${email}</p>
// //            <p>Phone: ${phone}</p>
// //            <p>Message: ${message}</p>`,
// //   };

// //   contactEmail.sendMail(mail, (error) => {
// //     if (error) {
// //       res.status(500).json({ error: "Failed to send message" });
// //     } else {
// //       res.status(200).json({ message: "Message Sent" });
// //     }
// //   });
// // });
// router.post("/contact", (req, res) => {
//   console.log("hey");
//   console.log(req.body);
//   const { firstName, lastName, email, message, phone } = req.body;
//   const name = firstName + " " + lastName;
//   const mail = {
//     from: name,
//     to: "aa8564073595@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };

//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.status(500).json({ error: "Failed to send message" });
//     } else {
//       res.status(200).json({ message: "Message Sent" });
//     }
//   });
// });


// const port = 3000;
// // const port = 8080;
// app.listen(port, () => console.log(`Server running on port ${port}`));
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const emailjs = require("@emailjs/browser"); 

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", (req, res) => {
  const { user_name, user_lastname, user_email, user_phone, message } = req.body;

  // Construct your email
  const emailData = {
    service_id: "ayush2609",
    template_id: "ayush2609",
    user_id: "uQtQVFTlTbFumTjdM",
    template_params: {
      user_name,
      user_lastname,
      user_email,
      user_phone,
      message
    }
  };

  // Send the email using emailjs
  emailjs.send("gmail", "template_name", emailData, "user_yourUserID")
    .then((response) => {
      console.log("Email sent:", response);
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


