"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeft, MapPin, Send, ArrowUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Back to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after submission
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Reset submission status after delay
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/"
          className="inline-flex items-center text-[#00E6E6] hover:text-[#00E6E6]/80 mb-8"
          aria-label="Back to Home"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team to learn more about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full py-12">
                  <CheckCircle2 className="w-16 h-16 text-[#00E6E6] mb-6" />
                  <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                  <p className="text-gray-300 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="block mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className={`bg-black/50 border ${errors.name ? 'border-red-500' : 'border-[#00E6E6]/20'}`}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="block mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className={`bg-black/50 border ${errors.email ? 'border-red-500' : 'border-[#00E6E6]/20'}`}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="subject" className="block mb-2">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        placeholder="What is this about?"
                        className="bg-black/50 border border-[#00E6E6]/20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="block mb-2">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Write your message here..."
                        className={`bg-black/50 border ${errors.message ? 'border-red-500' : 'border-[#00E6E6]/20'} h-32`}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit"
                      className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Email Contacts */}
              <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                <h2 className="text-xl font-semibold mb-6">Email Us</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#00E6E6] font-medium mb-2">General Inquiries</h3>
                    <a 
                      href="mailto:info@nexthomelabs.com"
                      className="text-white hover:text-[#00E6E6] transition-colors"
                      aria-label="Email for general inquiries"
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
                      aria-label="Email for business development"
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
                      aria-label="Email for technical support"
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
                    aria-label="Join WhatsApp Group"
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
            </motion.div>
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

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[#00E6E6] text-black shadow-lg transition-all hover:bg-[#00E6E6]/80 focus:outline-none focus:ring-2 focus:ring-[#00E6E6]/50 z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}