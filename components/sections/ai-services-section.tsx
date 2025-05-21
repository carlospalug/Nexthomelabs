"use client";

import { motion } from "framer-motion";
import { Brain, Bot, ArrowRight, CheckCircle2, Lock, BarChart2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AIServicesModal } from "../ai-services-modal";

const services = [
  {
    title: "AI Consulting",
    icon: Brain,
    features: [
      "Custom AI strategy aligned with your business goals",
      "Detailed implementation roadmap with ROI analysis",
      "Industry-specific AI solution architecture"
    ],
    benefits: [
      "25-50% improved operational efficiency",
      "Data-driven decision making",
      "Competitive advantage through innovation"
    ],
    security: [
      "Enterprise-grade data privacy",
      "Secure implementation methodologies",
      "Compliance with industry regulations"
    ]
  },
  {
    title: "AI Automation",
    icon: Bot,
    features: [
      "Reduce manual tasks by up to 80% with smart automation",
      "Custom ML models trained on your business data",
      "Seamless integration with existing workflows"
    ],
    benefits: [
      "40-70% reduction in processing time",
      "Elimination of human error",
      "24/7 operational capability"
    ],
    security: [
      "ISO 27001 certified processes",
      "End-to-end data encryption",
      "Regular security audits"
    ]
  }
];

export function AIServicesSection() {
  const [modalType, setModalType] = useState<'consulting' | 'automation' | null>(null);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,230,230,0.05),transparent_70%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(0, 230, 230, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
            Transform Your Future with AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Step into the future with our advanced AI solutions. Our expert team helps
            you integrate AI seamlessly into your business operations for maximum
            impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-8 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-violet-500/20">
                    <service.icon className="w-8 h-8 text-[#00E6E6]" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                {/* Features Section */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-sm font-semibold text-[#00E6E6] uppercase tracking-wider">Features</h4>
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00E6E6] mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{feature}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Benefits Section */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-sm font-semibold text-[#00E6E6] uppercase tracking-wider">Business Impact</h4>
                  {service.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (benefitIndex * 0.1) + 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <BarChart2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{benefit}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Security Section */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-sm font-semibold text-[#00E6E6] uppercase tracking-wider">Security & Compliance</h4>
                  {service.security.map((item, securityIndex) => (
                    <motion.div
                      key={securityIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (securityIndex * 0.1) + 0.6 }}
                      className="flex items-start gap-3"
                    >
                      <Lock className="w-5 h-5 text-[#00E6E6] mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white group relative overflow-hidden"
                    onClick={() => setModalType(service.title === "AI Consulting" ? "consulting" : "automation")}
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 w-full h-0 bg-white/10 group-hover:h-full transition-all duration-300 ease-out"></span>
                  </Button>
                  
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <Clock className="w-4 h-4 text-[#00E6E6]" />
                    <p className="text-xs text-gray-400">Implementation in as little as 2 weeks</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center bg-[#00E6E6]/10 border border-[#00E6E6]/30 rounded-full py-2 px-4 mb-8">
            <Lock className="w-4 h-4 text-[#00E6E6] mr-2" />
            <span className="text-sm">ISO 27001 Certified Security</span>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join over 100 businesses that trust NextHomeLabs with their AI transformation. Our solutions are designed for security, scalability, and long-term business impact.
          </p>
        </motion.div>
      </div>

      {/* Service Modal */}
      <AIServicesModal 
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'consulting'}
      />
    </section>
  );
}