"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ConsultationFormProps {
  serviceType: 'consulting' | 'automation';
  onClose: () => void;
}

export function ConsultationForm({ serviceType, onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectDescription: "",
    budget: "10k-25k",
    timeline: "1-3 months"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 px-4"
      >
        <div className="mb-6">
          <div className="w-16 h-16 bg-[#00E6E6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-[#00E6E6]" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
          <p className="text-gray-400">
            Thank you for your interest. Our team will contact you within 24 hours to discuss your {serviceType} needs.
          </p>
        </div>
        <Button
          onClick={onClose}
          className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
        >
          Close
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Full Name *
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

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Email Address *
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

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Company Name
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full p-3 bg-black/50 border border-[#00E6E6]/20 rounded-lg focus:outline-none focus:border-[#00E6E6] text-white"
            placeholder="Enter your company name"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-3 bg-black/50 border border-[#00E6E6]/20 rounded-lg focus:outline-none focus:border-[#00E6E6] text-white"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Project Description *
        </label>
        <textarea
          required
          value={formData.projectDescription}
          onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
          className="w-full p-3 bg-black/50 border border-[#00E6E6]/20 rounded-lg focus:outline-none focus:border-[#00E6E6] text-white h-32"
          placeholder="Tell us about your project and requirements"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Budget Range */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Budget Range
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full p-3 bg-black/50 border border-[#00E6E6]/20 rounded-lg focus:outline-none focus:border-[#00E6E6] text-white"
          >
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-plus">$50,000+</option>
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Expected Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full p-3 bg-black/50 border border-[#00E6E6]/20 rounded-lg focus:outline-none focus:border-[#00E6E6] text-white"
          >
            <option value="under-1-month">Less than 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6-plus-months">6+ months</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-end pt-4">
        <Button
          type="submit"
          className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
        >
          Submit Request
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button
          type="button"
          variant="outline"
          className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
