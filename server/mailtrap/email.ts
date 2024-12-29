// import {
//   generatePasswordResetEmailHtml,
//   generateResetSuccessEmailHtml,
//   generateWelcomeEmailHtml,
//   htmlContent,
// } from "./htmlEmail";
// import { client, sender } from "./mailtrap";

// export const sendVerificationEmail = async (
//   email: string,
//   verificationToken: string
// ) => {
//   const recipient = [{ email }];
//   try {
//     const res = await client.send({
//       from: sender,
//       to: recipient,
//       subject: "Verify your email",
//       html: htmlContent.replace("{verificationToken}", verificationToken),
//       category: "Email Verification",
//     });
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to send email verification");
//   }
// };

// export const sendWelcomeEmail = async (email: string, name: string) => {
//   const recipient = [{ email }];
//   const htmlContent = generateWelcomeEmailHtml(name);
//   try {
//     const res = await client.send({
//       from: sender,
//       to: recipient,
//       subject: "Welcome to PatelEats",
//       html: htmlContent,
//       template_variables: {
//         company_info_name: "PatelEats",
//         name: name,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to send welcome email");
//   }
// };
// export const sendPasswordResetEmail = async (
//   email: string,
//   resetURL: string
// ) => {
//   const recipient = [{ email }];
//   const htmlContent = generatePasswordResetEmailHtml(resetURL);
//   try {
//     const res = await client.send({
//       from: sender,
//       to: recipient,
//       subject: "Reset your password",
//       html: htmlContent,
//       category: "Reset Password",
//     });
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to reset password");
//   }
// };
// export const sendResetSuccessEmail = async (email: string) => {
//   const recipient = [{ email }];
//   const htmlContent = generateResetSuccessEmailHtml();
//   try {
//     const res = await client.send({
//       from: sender,
//       to: recipient,
//       subject: "Password Reset Successfully",
//       html: htmlContent,
//       category: "Password Reset",
//     });
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to send password reset success email");
//   }
// };

import {
  generatePasswordResetEmailHtml,
  generateResetSuccessEmailHtml,
  generateWelcomeEmailHtml,
  htmlContent,
} from "./htmlEmail";
import { client, sender } from "./mailtrap";

/**
 * Sends a verification email to the user.
 * @param email - The recipient's email address.
 * @param verificationToken - The unique verification token.
 */
export const sendVerificationEmail = async (
  email: string,
  verificationToken: string
) => {
  const html = htmlContent.replace("{verificationToken}", verificationToken);

  try {
    const res = await client.sendMail({
      from: `"${sender.name}" <${sender.address}>`,
      to: email,
      subject: "Verify your email",
      html: html,
    });
    console.log("Verification email sent:", res);
    return;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Failed to send email verification");
  }
};

/**
 * Sends a welcome email to the user.
 * @param email - The recipient's email address.
 * @param name - The name of the recipient.
 */
export const sendWelcomeEmail = async (email: string, name: string) => {
  const html = generateWelcomeEmailHtml(name);

  try {
    const res = await client.sendMail({
      from: `"${sender.name}" <${sender.address}>`,
      to: email,
      subject: "Welcome to PatelEats",
      html: html,
    });
    console.log("Welcome email sent:", res);
    return
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
};

/**
 * Sends a password reset email to the user.
 * @param email - The recipient's email address.
 * @param resetURL - The URL for resetting the password.
 */
export const sendPasswordResetEmail = async (
  email: string,
  resetURL: string
) => {
  const html = generatePasswordResetEmailHtml(resetURL);

  try {
    const res = await client.sendMail({
      from: `"${sender.name}" <${sender.address}>`,
      to: email,
      subject: "Reset your password",
      html: html,
    });
    console.log("Password reset email sent:", res);
    return
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error("Failed to reset password");
  }
};

/**
 * Sends a password reset success email to the user.
 * @param email - The recipient's email address.
 */
export const sendResetSuccessEmail = async (email: string) => {
  const html = generateResetSuccessEmailHtml();

  try {
    const res = await client.sendMail({
      from: `"${sender.name}" <${sender.address}>`,
      to: email,
      subject: "Password Reset Successfully",
      html: html,
    });
    console.log("Password reset success email sent:", res);
    return;
  } catch (error) {
    console.error("Error sending password reset success email:", error);
    throw new Error("Failed to send password reset success email");
  }
};
