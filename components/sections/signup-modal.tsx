"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to CentGPT
    window.location.href = "https://centgpt.com";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-lg p-6 bg-black border border-[#00E6E6]/20 rounded-xl shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Join NextHomeLabs</h2>
              <p className="text-gray-400">
                Start your journey towards AI-powered innovation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-black/50 border border-[#00E6E6]/20 rounded-lg focus:outline-none focus:border-[#00E6E6] text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-black/50 border border-[#00E6E6]/20 rounded-lg focus:outline-none focus:border-[#00E6E6] text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-3 bg-black/50 border border-[#00E6E6]/20 rounded-lg focus:outline-none focus:border-[#00E6E6] text-white"
                  placeholder="Enter your company name (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-3 bg-black/50 border border-[#00E6E6]/20 rounded-lg focus:outline-none focus:border-[#00E6E6] text-white"
                  placeholder="Enter your location"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
              >
                Sign Up
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-gray-400 text-center mt-4">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
