const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "***************@gmail.com",
    pass: "********",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
router.post("/Contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "***************@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server Running"));
