"use client";

import { motion } from "framer-motion";
import { Brain, Bot, ArrowRight, CheckCircle2 } from "lucide-react";
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
    ]
  },
  {
    title: "AI Automation",
    icon: Bot,
    features: [
      "Reduce manual tasks by up to 80% with smart automation",
      "Custom ML models trained on your business data",
      "Seamless integration with existing workflows"
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
              <div className="relative p-8 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-violet-500/20">
                    <service.icon className="w-8 h-8 text-[#00E6E6]" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                <div className="space-y-4 mb-8">
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

                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white group"
                  onClick={() => setModalType(service.title === "AI Consulting" ? "consulting" : "automation")}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
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
