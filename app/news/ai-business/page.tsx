"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Brain, ChevronRight, ArrowRight, Bot, Building2, LineChart, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    id: "understanding",
    title: "Understanding AI and Its Potential for Business",
    content: "AI involves machine learning, natural language processing, and automation to improve business processes. It can enhance customer service, streamline operations, and provide data-driven insights. NextHomeLabs specializes in AI solutions tailored for African businesses, making AI adoption easier.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    stats: {
      value: "85%",
      label: "Efficiency Increase"
    }
  },
  {
    id: "readiness",
    title: "Assessing Your Business Readiness for AI",
    content: "Before integrating AI, businesses should evaluate their current data infrastructure, technological capabilities, and the specific problems AI can solve. This includes conducting an AI readiness audit and identifying key areas for improvement. NextHomeLabs provides consultation services to help businesses assess their AI readiness.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    stats: {
      value: "60%",
      label: "Business Ready"
    }
  },
  {
    id: "tools",
    title: "Starting with AI-Powered Business Tools",
    content: "Businesses can begin by implementing AI-powered tools such as CentGPT, an AI model developed by NextHomeLabs that provides smart customer support, automated responses, and business insights. These tools help in reducing costs and improving efficiency.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    stats: {
      value: "40%",
      label: "Cost Reduction"
    }
  },
  {
    id: "model",
    title: "Building an AI-Driven Business Model",
    content: "To fully integrate AI, businesses should design their operations around AI capabilities. This includes adopting AI for sales forecasting, personalized recommendations, and automated customer interactions. NextHomeLabs provides AI development services to assist businesses in building AI-driven models.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    stats: {
      value: "200%",
      label: "ROI Increase"
    }
  }
];

const keyFeatures = [
  {
    title: "AI for Customer Engagement",
    icon: Bot,
    description: "AI chatbots and virtual assistants for real-time customer support",
    capabilities: [
      "24/7 customer support",
      "Personalized responses",
      "Multi-language support",
      "WhatsApp integration"
    ]
  },
  {
    title: "Marketing and Sales",
    icon: LineChart,
    description: "AI-powered marketing and sales optimization",
    capabilities: [
      "Market trend analysis",
      "Lead generation",
      "Campaign optimization",
      "Sales forecasting"
    ]
  },
  {
    title: "Supply Chain Management",
    icon: Building2,
    description: "AI-driven supply chain and inventory optimization",
    capabilities: [
      "Demand prediction",
      "Inventory optimization",
      "Logistics planning",
      "Supplier management"
    ]
  },
  {
    title: "Financial Management",
    icon: Cpu,
    description: "AI solutions for financial operations",
    capabilities: [
      "Fraud detection",
      "Automated invoicing",
      "Credit scoring",
      "Risk assessment"
    ]
  }
];

const challenges = [
  {
    title: "Skills Gap",
    description: "Lack of AI expertise and technical skills",
    solutions: [
      "Training programs",
      "Expert consultation",
      "Skill development"
    ]
  },
  {
    title: "Data Quality",
    description: "Ensuring high-quality data for AI training",
    solutions: [
      "Data cleaning",
      "Standardization",
      "Quality assurance"
    ]
  },
  {
    title: "Integration",
    description: "Integrating AI with existing systems",
    solutions: [
      "Phased implementation",
      "API integration",
      "System compatibility"
    ]
  },
  {
    title: "Cost Management",
    description: "Managing implementation and maintenance costs",
    solutions: [
      "ROI analysis",
      "Scalable solutions",
      "Cost optimization"
    ]
  }
];

export default function AIBusinessPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/news"
          className="inline-flex items-center text-[#00E6E6] hover:text-[#00E6E6]/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#00E6E6]">
              <Brain className="w-8 h-8" />
              <div className="flex items-center text-sm">
                News
                <ChevronRight className="w-4 h-4 mx-1" />
                Business Innovation
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Integrating AI into Your Business in Uganda/Africa
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>By Richard Ohood</span>
              </div>
              <span>•</span>
              <span>February 19, 2024</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
            "Artificial Intelligence (AI) is transforming businesses across Africa, enhancing efficiency, decision-making, and customer experience. This article explores how businesses in Uganda and across the continent can integrate AI into their operations to maximize growth and innovation. Companies like NextHomeLabs and AI-powered solutions like CentGPT are leading this transformation in Uganda and beyond.
            </p>
          </div>

          {/* Main Content */}
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-[#00E6E6]">{section.title}</h2>
              
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-[#00E6E6] text-black px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">{section.stats.value}</div>
                  <div className="text-sm">{section.stats.label}</div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}

          {/* Key Features */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Key AI Features for Business</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <feature.icon className="w-6 h-6 text-[#00E6E6]" />
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.capabilities.map((capability, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {capability}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Challenges and Solutions */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Overcoming AI Implementation Challenges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {challenge.description}
                  </p>
                  <div className="space-y-2">
                    {challenge.solutions.map((solution, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {solution}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Transform Your Business with AI</h3>
              <p className="text-gray-300 mb-6">
                Ready to leverage AI for your business growth? NextHomeLabs provides comprehensive AI solutions tailored for African businesses. Contact us to start your AI transformation journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://centgpt.com" target="_blank">
                  <Button 
                    className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                  >
                    Try CentGPT
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline"
                    className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
