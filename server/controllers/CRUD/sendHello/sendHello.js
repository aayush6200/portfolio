import { HelloReceived } from "./HelloReceived.js";
import { HelloReplied } from "./HelloReplied.js";

export const sendHelloActivity = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const info = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
  };
  console.log("info", info);
  if (!firstName || !lastName || !email || !message) {
    return res
      .status(204)
      .json({ message: "Please make you entered all the  fields" });
  } else {
    try {
      const response = await HelloReceived(info);
      if (!response.result) {
        console.log(response);
        return res.status(500).json({ message: "Internal Server Error" });
      } else {
        const data = await HelloReplied(info);
        if (!data.result) {
          console.log("data", data);
          return res.status(204).json({
            message: "Email was not found.Please enter correct email",
          });
        } else {
          return res.status(200).json({
            message:
              "Your message was successfully sent. Will get reply within few days",
          });
        }
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "internal server erroreeee" });
    }
  }
};
