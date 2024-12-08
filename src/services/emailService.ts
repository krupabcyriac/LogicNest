import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS service details
const SERVICE_ID = 'service_7iq6kx2';
const TEMPLATE_ID = 'template_d58ulxg';
const PUBLIC_KEY = 'rB6dm_9axP2sjzNJa';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw error;
  }
};