"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, Brain, Shield, Bot, X } from "lucide-react";

const detailedContent = {
  ai: {
    title: "Artificial Intelligence",
    description: "Our AI technology represents the cutting edge of innovation, designed to transform how businesses operate and grow.",
    benefits: [
      "Advanced Machine Learning Algorithms",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics"
    ],
    applications: [
      "Business Process Automation",
      "Customer Experience Enhancement",
      "Data Analysis and Insights",
      "Decision Support Systems"
    ]
  },
  blockchain: {
    title: "Blockchain Technology",
    description: "Our blockchain solutions provide secure, transparent, and efficient ways to manage transactions and data.",
    benefits: [
      "Immutable Record Keeping",
      "Smart Contract Automation",
      "Decentralized Security",
      "Transparent Operations"
    ],
    applications: [
      "Supply Chain Management",
      "Financial Services",
      "Digital Identity",
      "Asset Tokenization"
    ]
  }
};

export function WhyAISection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/40" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square"
          >
            {/* Enhanced background glow effect */}
            <div className="absolute inset-0 bg-[#00E6E6]/20 rounded-full blur-3xl animate-pulse" />
            
            <div className="relative w-full h-full rounded-full border-2 border-[#00E6E6]/30 overflow-hidden">
              {/* Rotating Lines */}
              <motion.div
                className="absolute inset-0 border-2 border-[#00E6E6]/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border border-[#00E6E6]/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Center Logo */}
              <Image
                src="https://i.ibb.co/HNHDVZS/nhl934-e559d97359102662b413-1.png"
                alt="NextHomeLabs Logo"
                width={400}
                height={400}
                className="object-contain w-full h-full p-12"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Why <span className="text-[#00E6E6]">Artificial Intelligence</span> and{" "}
              <span className="text-[#00E6E6]">Blockchain</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At NextHome Labs, we believe that Artificial Intelligence (AI) and Blockchain are the cornerstones of future technological advancements. Our focus on these technologies stems from our commitment to harnessing their potential to revolutionize various industries, enhance security, and improve operational efficiency.
            </p>
            <Button 
              size="lg" 
              className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
              onClick={() => setShowDetails(true)}
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Detailed Content Modal */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm"
          >
            <div className="min-h-screen px-4 py-8 overflow-y-auto">
              <div className="relative max-w-4xl mx-auto">
                <div className="bg-black border border-[#00E6E6]/20 rounded-2xl overflow-hidden">
                  <div className="relative p-8">
                    <button
                      onClick={() => setShowDetails(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-3xl font-bold mb-4">Why We Focus on AI and Blockchain</h3>
                        <p className="text-gray-300">
                          At NextHomeLabs, we're dedicated to pushing the boundaries of what's possible with AI and blockchain technology. Our innovative solutions are designed to address real-world challenges and create lasting impact across industries.
                        </p>
                      </div>

                      {/* AI Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Brain className="w-6 h-6 text-[#00E6E6]" />
                          <h4 className="text-xl font-semibold">{detailedContent.ai.title}</h4>
                        </div>
                        <p className="text-gray-300">{detailedContent.ai.description}</p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="text-[#00E6E6] font-medium mb-2">Key Benefits</h5>
                            <ul className="space-y-2">
                              {detailedContent.ai.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-[#00E6E6] font-medium mb-2">Applications</h5>
                            <ul className="space-y-2">
                              {detailedContent.ai.applications.map((app, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                                  {app}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Blockchain Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Shield className="w-6 h-6 text-[#00E6E6]" />
                          <h4 className="text-xl font-semibold">{detailedContent.blockchain.title}</h4>
                        </div>
                        <p className="text-gray-300">{detailedContent.blockchain.description}</p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="text-[#00E6E6] font-medium mb-2">Key Benefits</h5>
                            <ul className="space-y-2">
                              {detailedContent.blockchain.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-[#00E6E6] font-medium mb-2">Applications</h5>
                            <ul className="space-y-2">
                              {detailedContent.blockchain.applications.map((app, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                                  {app}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                          onClick={() => setShowDetails(false)}
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
