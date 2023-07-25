const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aa8564073595@gmail.com",
    pass:  "examihohkeilepzj",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/#contact", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, message, phone } = req.body;
  const name = firstName + " " + lastName;
  const mail = {
    from: name,
    to: "aa8564073595@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ error: "Failed to send message" });
    } else {
      res.status(200).json({ message: "Message Sent" });
    }
  });
});

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));

