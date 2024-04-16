// api/send.js

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    const { email, subject, message } = await req.json();

    // Send email without waiting for a response
    resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    // Send a successful response to the client
    res.status(200).end();
  } catch (error) {
    console.error("Error sending email:", error);
    // Send an error response to the client
    res.status(500).json({ error: 'Failed to send email' });
  }
}
