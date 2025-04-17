import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as nodemailer from "nodemailer";
import { insertBookingSchema, insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking API endpoint
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      
      // Send email notification (in a real app this would use actual SMTP config)
      await sendNotificationEmail({
        to: "hello@petehelms.com", // This would ideally be in env vars
        subject: "New Strategy Session Booking",
        text: `
          New booking request:
          Name: ${booking.name}
          Email: ${booking.email}
          Company: ${booking.company || "Not specified"}
          Date: ${booking.date}
          Time: ${booking.time}
          Message: ${booking.message || "No message provided"}
        `,
        html: `
          <h2>New Booking Request</h2>
          <p><strong>Name:</strong> ${booking.name}</p>
          <p><strong>Email:</strong> ${booking.email}</p>
          <p><strong>Company:</strong> ${booking.company || "Not specified"}</p>
          <p><strong>Date:</strong> ${booking.date}</p>
          <p><strong>Time:</strong> ${booking.time}</p>
          <p><strong>Message:</strong> ${booking.message || "No message provided"}</p>
        `
      });
      
      // Send confirmation email to user
      await sendNotificationEmail({
        to: booking.email,
        subject: "Your Strategy Session with Pete Helms",
        text: `
          Thank you for booking a strategy session!
          
          Your session details:
          Date: ${booking.date}
          Time: ${booking.time}
          
          I'm looking forward to our conversation.
          
          Best regards,
          Pete Helms
        `,
        html: `
          <h2>Thank you for booking a strategy session!</h2>
          <p>Your session has been confirmed for:</p>
          <p><strong>Date:</strong> ${booking.date}</p>
          <p><strong>Time:</strong> ${booking.time}</p>
          <p>I'm looking forward to our conversation.</p>
          <p>Best regards,<br>Pete Helms</p>
        `
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Booking created successfully", 
        booking 
      });
    } catch (error) {
      if (error instanceof Error) {
        const message = fromZodError(error).message;
        res.status(400).json({ success: false, message });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      await sendNotificationEmail({
        to: "hello@petehelms.com", // This would ideally be in env vars
        subject: `New Contact Form Submission: ${contact.subject || 'No Subject'}`,
        text: `
          New contact form submission:
          Name: ${contact.name}
          Email: ${contact.email}
          Subject: ${contact.subject || "Not specified"}
          Message: ${contact.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contact.name}</p>
          <p><strong>Email:</strong> ${contact.email}</p>
          <p><strong>Subject:</strong> ${contact.subject || "Not specified"}</p>
          <p><strong>Message:</strong> ${contact.message}</p>
        `
      });
      
      // Send confirmation to user
      await sendNotificationEmail({
        to: contact.email,
        subject: "Thank you for your message",
        text: `
          Thank you for reaching out!
          
          I've received your message and will get back to you as soon as possible.
          
          Best regards,
          Pete Helms
        `,
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Pete Helms</p>
        `
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully", 
        contact 
      });
    } catch (error) {
      if (error instanceof Error) {
        const message = fromZodError(error).message;
        res.status(400).json({ success: false, message });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  // Get available booking times (simplified example)
  app.get("/api/booking-slots", (req, res) => {
    // In a real application, this would fetch from a calendar or database
    const today = new Date();
    const slots = [];
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) {
        continue;
      }
      
      // Format date
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      
      // Add some time slots
      slots.push({
        date: formattedDate,
        times: [
          "10:00 AM - 11:00 AM",
          "1:00 PM - 2:00 PM",
          "3:00 PM - 4:00 PM"
        ]
      });
      
      // Only show up to 7 available days
      if (slots.length >= 7) break;
    }
    
    res.json({ success: true, slots });
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Email notification function
async function sendNotificationEmail({
  to,
  subject,
  text,
  html
}: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  // In development/test mode, we'll just log the email
  if (process.env.NODE_ENV !== "production") {
    console.log("===== EMAIL NOTIFICATION =====");
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Text: ${text}`);
    console.log("=============================");
    return;
  }
  
  // In production, we would use actual mail service
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || ""
    }
  });
  
  return transporter.sendMail({
    from: process.env.EMAIL_FROM || "Pete Helms <hello@petehelms.com>",
    to,
    subject,
    text,
    html
  });
}
