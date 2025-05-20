"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
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
