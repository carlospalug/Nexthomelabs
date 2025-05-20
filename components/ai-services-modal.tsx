"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Brain, Bot, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationForm } from "./consultation-form";

interface AIServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'consulting' | 'automation';
}

const consultingDetails = {
  title: "AI Consulting Services",
  description: "Transform your business with expert AI guidance and implementation",
  benefits: [
    "Comprehensive AI readiness assessment",
    "Custom AI strategy development",
    "ROI analysis and implementation roadmap",
    "Technical architecture planning",
    "AI solution selection and vendor evaluation",
    "Change management and training support"
  ],
  process: [
    {
      title: "Initial Assessment",
      description: "We evaluate your current systems, processes, and AI readiness"
    },
    {
      title: "Strategy Development",
      description: "Custom AI roadmap aligned with your business objectives"
    },
    {
      title: "Solution Design",
      description: "Detailed technical architecture and implementation plan"
    },
    {
      title: "Implementation Support",
      description: "Expert guidance throughout the deployment process"
    }
  ],
  pricing: [
    {
      title: "Basic Assessment",
      price: "$5,000",
      features: [
        "AI readiness evaluation",
        "Basic recommendations",
        "2-week engagement"
      ]
    },
    {
      title: "Strategic Planning",
      price: "$15,000",
      features: [
        "Comprehensive strategy",
        "ROI analysis",
        "4-week engagement"
      ]
    },
    {
      title: "Full Implementation",
      price: "Custom",
      features: [
        "End-to-end support",
        "Technical architecture",
        "Training and deployment"
      ]
    }
  ]
};

const automationDetails = {
  title: "AI Automation Solutions",
  description: "Streamline operations with intelligent automation",
  benefits: [
    "Reduce operational costs by up to 80%",
    "24/7 automated operations",
    "Improved accuracy and consistency",
    "Faster processing times",
    "Scalable solutions",
    "Real-time monitoring and analytics"
  ],
  process: [
    {
      title: "Process Analysis",
      description: "Identify automation opportunities in your workflow"
    },
    {
      title: "Solution Design",
      description: "Custom automation solution tailored to your needs"
    },
    {
      title: "Development",
      description: "AI model training and integration development"
    },
    {
      title: "Deployment & Support",
      description: "Seamless implementation and ongoing maintenance"
    }
  ],
  pricing: [
    {
      title: "Starter Automation",
      price: "$10,000",
      features: [
        "Single process automation",
        "Basic AI integration",
        "30-day support"
      ]
    },
    {
      title: "Business Suite",
      price: "$25,000",
      features: [
        "Multiple process automation",
        "Advanced AI capabilities",
        "90-day support"
      ]
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Full-scale automation",
        "Custom AI models",
        "Dedicated support"
      ]
    }
  ]
};

export function AIServicesModal({ isOpen, onClose, type }: AIServicesModalProps) {
  const details = type === 'consulting' ? consultingDetails : automationDetails;
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-10"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl bg-black border border-[#00E6E6]/20 rounded-xl shadow-xl m-4"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-6 space-y-8">
              {showConsultationForm ? (
                <ConsultationForm 
                  serviceType={type}
                  onClose={() => {
                    setShowConsultationForm(false);
                    onClose();
                  }}
                />
              ) : (
                <>
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#00E6E6]/10">
                      {type === 'consulting' ? (
                        <Brain className="w-6 h-6 text-[#00E6E6]" />
                      ) : (
                        <Bot className="w-6 h-6 text-[#00E6E6]" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{details.title}</h2>
                      <p className="text-gray-400">{details.description}</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {details.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#00E6E6] flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {details.process.map((step, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/10"
                        >
                          <h4 className="font-semibold text-[#00E6E6] mb-2">{step.title}</h4>
                          <p className="text-gray-300 text-sm">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Pricing Plans</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {details.pricing.map((plan, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/10"
                        >
                          <h4 className="font-semibold text-lg mb-1">{plan.title}</h4>
                          <p className="text-[#00E6E6] text-2xl font-bold mb-4">{plan.price}</p>
                          <ul className="space-y-2">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <Button 
                      className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                      onClick={() => setShowConsultationForm(true)}
                    >
                      Request Consultation
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                      onClick={onClose}
                    >
                      Close
                    </Button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
