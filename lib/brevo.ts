import axios from 'axios';

const API_KEY = process.env.BREVO_API_KEY as string;
const domain = process.env.NEXT_PUBLIC_APP_URL;

const sendBrevoEmail = async ({
  to,
  subject,
  htmlContent,
}: {
  to: string;
  subject: string;
  htmlContent: string;
}) => {
  return await axios.post(
    'https://api.brevo.com/v3/smtp/email',
    {
      sender: {
        name: 'Auth Test',
        email: 'koteseydou8@gmail.com', // doit être vérifié chez Brevo
      },
      to: [{ email: to }],
      subject,
      htmlContent,
    },
    {
      headers: {
        'api-key': API_KEY,
        'Content-Type': 'application/json',
      },
    }
  );
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await sendBrevoEmail({
    to: email,
    subject: '2FA Code',
    htmlContent: `<p>Your 2FA code: <strong>${token}</strong></p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;
  await sendBrevoEmail({
    to: email,
    subject: 'Confirm your email',
    htmlContent: `<p>Click <a href="${confirmLink}">here</a> to confirm your email.</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;
  await sendBrevoEmail({
    to: email,
    subject: 'Reset your password',
    htmlContent: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });
};
