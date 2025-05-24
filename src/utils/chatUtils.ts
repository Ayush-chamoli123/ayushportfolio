
import emailjs from '@emailjs/browser';

export type Message = {
  text: string;
  sender: "user" | "ai";
};

export const generateAIResponse = (userMessage: string): Promise<string> => {
  return new Promise((resolve) => {
    // Mock AI response based on keywords (in a real app, this would call an API)
    let response = "I'm not sure how to respond to that. Ask me about the portfolio, skills, or projects!";
    
    const query = userMessage.toLowerCase();
    
    if (query.includes("resume") || query.includes("cv") || query.includes("experience")) {
      response = "The resume section showcases professional experience, education, and skills. You can download the full PDF version or explore the interactive sections!";
    } else if (query.includes("videos") || query.includes("learning")) {
      response = "The video gallery contains daily learning content on various tech topics. Each video includes a summary and you can filter by category or search for specific topics.";
    } else if (query.includes("contact") || query.includes("hire") || query.includes("work")) {
      response = "You can get in touch through the contact form or connect on social media. I'm open to freelance opportunities and collaborations!";
    } else if (query.includes("skills") || query.includes("technologies")) {
      response = "The portfolio showcases skills in React, Node.js, Python, TensorFlow, and other modern web technologies. Check the resume section for a complete list!";
    } else if (query.includes("project") || query.includes("portfolio")) {
      response = "This portfolio highlights various projects including AI-powered applications, web platforms, and mobile solutions. Each project includes details about technologies used and challenges solved.";
    } else if (query.includes("hi") || query.includes("hello") || query.includes("hey")) {
      response = "Hello! I'm an AI assistant for this portfolio. How can I help you today?";
    } else if (query.includes("email") || query.includes("message") || query.includes("mail")) {
      response = "Messages can be forwarded to your email. Make sure to set up EmailJS in the chatUtils.ts file with your service ID, template ID, and public key!";
    }
    
    // Simulate AI thinking time
    setTimeout(() => {
      resolve(response);
    }, 1500);
  });
};

export const sendEmailNotification = async (userMessage: string, forwardEmail: string): Promise<void> => {
  try {
    // ===== REPLACE THESE VALUES WITH YOUR ACTUAL EMAILJS CREDENTIALS =====
    // Create an account at https://www.emailjs.com/
    // Set up an Email Service (Gmail, Outlook, etc.)
    // Create an email template with variables: to_email, from_name, message, reply_to
    // Then copy the credentials from your EmailJS dashboard
    const serviceId = 'YOUR_SERVICE_ID'; // e.g., 'service_abc123'
    const templateId = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz789'
    const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'user_abcdefg123456'
    
    // Check if credentials have been set
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      console.warn('EmailJS is not configured. Please update the credentials in chatUtils.ts');
      return Promise.reject(new Error('EmailJS not configured'));
    }
    
    const templateParams = {
      to_email: forwardEmail,
      from_name: 'Portfolio Chat Assistant',
      message: userMessage,
      reply_to: 'noreply@portfolio.com',
    };
    
    // Send the email using EmailJS
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    console.log('Email sent successfully:', response);
    return Promise.resolve();
  } catch (error) {
    console.error('Error sending email notification:', error);
    return Promise.reject(error);
  }
};
