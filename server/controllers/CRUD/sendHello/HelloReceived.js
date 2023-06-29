import nodemailer from "nodemailer";

export const HelloReceived = (info) => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      host: "http://localhost:4000",
      service: "gmail",
      port: 465,
      auth: {
        user: "aayushthaps975@gmail.com",
        pass: "xxbkudibldtaftiq",
      },
    });
    let mailOptions = {
      from: info.email,
      to: "aayushthaps12345@gmail.com",
      subject: "Message from client",
      text: info.message,
    };
    transporter.sendMail(mailOptions, function (error, result) {
      if (error) {
        console.error("dfdfdf");
        reject(error);
      } else {
        resolve({ result });
      }
    });
  });
};
