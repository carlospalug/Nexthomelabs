import { corsHeaders } from "../_shared/cors.ts";
import { z } from "npm:zod";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 200,
    });
  }

  try {
    const { name, email, subject, message } = await req.json();

    // Validate request body
    try {
      formSchema.parse({ name, email, subject, message });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Invalid form data", details: error.errors }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // Connect to database to store the contact form submission
    const supabaseClient = Deno.env.get("SUPABASE_CLIENT") || "default";
    const { data, error } = await supabaseClient
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          subject,
          message,
          status: "new",
        },
      ]);

    if (error) throw error;

    // Here you would normally send an email notification using a service like SendGrid or similar
    // For demonstration, we'll simulate a successful email send
    
    /*
    // Example code for sending email with SendGrid
    const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");
    
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "info@nexthomelabs.com" }],
            subject: `Contact Form: ${subject}`,
          },
        ],
        from: { email: "noreply@nexthomelabs.com", name: "NextHomeLabs Website" },
        reply_to: { email, name },
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          },
        ],
      }),
    });
    
    if (!response.ok) {
      throw new Error("Failed to send email");
    }
    */

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully" 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});