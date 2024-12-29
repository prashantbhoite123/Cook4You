// import Nodemailer from "nodemailer";
// import { MailtrapTransport } from "mailtrap";

// export const client = Nodemailer.createTransport(
//   MailtrapTransport({
//     token: process.env.MAILTRAP_API_TOKEN as string,
//   })
// );

// export const sender = {
//   address: "hello@demomailtrap.com",
//   name: "Ganesh Pund",
// };

import Nodemailer from "nodemailer"; // Import Nodemailer
import { MailtrapTransport } from "mailtrap"; // Import Mailtrap Transport

// Create the Nodemailer transport using Mailtrap
export const client = Nodemailer.createTransport(
  MailtrapTransport({
    token: process.env.MAILTRAP_API_TOKEN as string, // Ensure you provide the Mailtrap API token
  })
);

// Define the sender's information
export const sender = {
  address: "hello@demomailtrap.com", // Updated key to 'address' to match Nodemailer's format
  name: "Ganesh Pund",
};
