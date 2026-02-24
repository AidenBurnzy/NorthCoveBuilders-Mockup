import { Resend } from "resend";

type ContactEmailArgs = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

export async function sendContactNotification({
  name,
  email,
  phone,
  projectType,
  budget,
  message,
}: ContactEmailArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;

  if (!apiKey || !from || !to) {
    return;
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to,
    subject: `New North Cove Inquiry: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`,
  });
}
