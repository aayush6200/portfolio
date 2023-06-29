import nodemailer from "nodemailer";

export const HelloReplied = (info) => {
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
      from: `aayushthaps12345@gmail.com`,
      to: info.email,
      subject: "Hello from Aayush",
      text: `hi ${info.firstName}. Thanks for your email. Will check back within a day or two.Have a nice day`,
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
