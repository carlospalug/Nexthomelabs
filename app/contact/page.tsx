"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    setError(null);

    try {
      // Here we would normally send the data to our Supabase Edge Function
      // For now, we'll simulate a successful submission after a delay
      
      // When we have the Edge Function endpoint, we'll use this code:
      /*
      const apiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/contact-form`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      */

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/"
          className="inline-flex items-center text-[#00E6E6] hover:text-[#00E6E6]/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team to learn more about our services
            </p>
          </div>

          <div className="grid gap-8">
            {!isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your name" 
                                {...field}
                                className="bg-black/50 border-[#00E6E6]/20 focus:border-[#00E6E6]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your email" 
                                type="email"
                                {...field}
                                className="bg-black/50 border-[#00E6E6]/20 focus:border-[#00E6E6]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter subject" 
                              {...field}
                              className="bg-black/50 border-[#00E6E6]/20 focus:border-[#00E6E6]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Enter your message" 
                              rows={6}
                              {...field}
                              className="bg-black/50 border-[#00E6E6]/20 focus:border-[#00E6E6] resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {error && (
                      <div className="text-red-500 text-sm py-2 px-3 rounded-md bg-red-500/10 border border-red-500/20">
                        {error}
                      </div>
                    )}
                    
                    <Button 
                      type="submit"
                      className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm text-center"
              >
                <div className="w-16 h-16 bg-[#00E6E6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#00E6E6]" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Message Sent!</h2>
                <p className="text-gray-300 mb-6">
                  Thank you for contacting us. Our team will get back to you shortly.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                >
                  Send Another Message
                </Button>
              </motion.div>
            )}

            {/* Email Contacts */}
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-6">Email Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#00E6E6] font-medium mb-2">General Inquiries</h3>
                  <a 
                    href="mailto:info@nexthomelabs.com"
                    className="text-white hover:text-[#00E6E6] transition-colors"
                  >
                    info@nexthomelabs.com
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    For general questions and information
                  </p>
                </div>

                <div>
                  <h3 className="text-[#00E6E6] font-medium mb-2">Business Development</h3>
                  <a 
                    href="mailto:business@nexthomelabs.com"
                    className="text-white hover:text-[#00E6E6] transition-colors"
                  >
                    business@nexthomelabs.com
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    For partnership and business opportunities
                  </p>
                </div>

                <div>
                  <h3 className="text-[#00E6E6] font-medium mb-2">Technical Support</h3>
                  <a 
                    href="mailto:support@nexthomelabs.com"
                    className="text-white hover:text-[#00E6E6] transition-colors"
                  >
                    support@nexthomelabs.com
                  </a>
                  <p className="text-sm text-gray-400 mt-1">
                    For technical assistance and support
                  </p>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-6">Join Our Community</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Connect with our team and community members in our WhatsApp group for updates, discussions, and support.
                </p>
                <a 
                  href="https://chat.whatsapp.com/EcaYoVLg2gV4wKAliMYhsU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                  >
                    Join WhatsApp Group
                  </Button>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#00E6E6]" />
                <div>
                  <h2 className="text-xl font-semibold">Location</h2>
                  <p className="text-gray-300">Kampala, Uganda</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="text-center space-y-4">
            <p className="text-gray-400">
              Our team typically responds within 24 hours during business days.
            </p>
            <p className="text-sm text-gray-500">
              For urgent matters, please use the WhatsApp group or email our support team.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}