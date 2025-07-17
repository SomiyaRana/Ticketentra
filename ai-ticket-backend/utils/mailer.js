import nodemailer from "nodemailer"

export const sendMail = async (to, subject, text)=>{
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_SMTP_HOST,
      port:process.env.MAILTRAP_SMTP_HOST_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_SMTP_HOST_USER,
        pass: process.env.MAILTRAP_SMTP_HOST_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: '"Inngest TML ',
      to,
      subject,
      text, 
    
    });
    console.log("Message Sent :" , info.messageId);
    return  info;
    
  } catch (error) {
    console.log("Mail error", error.message)
    throw error;
    
  }

  
}

