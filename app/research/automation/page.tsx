"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Bot, ChevronRight, ExternalLink, Cog, Cpu, Workflow, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    alt: "AI Automation Systems",
    caption: "Intelligent automation transforming business processes"
  },
  {
    url: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
    alt: "Smart Manufacturing",
    caption: "AI-powered automation in manufacturing"
  },
  {
    url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    alt: "Process Automation",
    caption: "Streamlined workflows through intelligent automation"
  }
];

const keyFeatures = [
  {
    title: "Machine Learning Integration",
    icon: Brain,
    description: "Systems that learn and improve from experience",
    capabilities: [
      "Pattern recognition",
      "Predictive analytics",
      "Adaptive learning"
    ]
  },
  {
    title: "Process Automation",
    icon: Workflow,
    description: "Streamlining complex business workflows",
    capabilities: [
      "Workflow optimization",
      "Task automation",
      "Error reduction"
    ]
  },
  {
    title: "Intelligent Decision Making",
    icon: Cpu,
    description: "AI-powered decision support systems",
    capabilities: [
      "Real-time analysis",
      "Data-driven decisions",
      "Risk assessment"
    ]
  },
  {
    title: "Smart Integration",
    icon: Cog,
    description: "Seamless integration with existing systems",
    capabilities: [
      "API connectivity",
      "Legacy system integration",
      "Cross-platform support"
    ]
  }
];

const industryApplications = [
  {
    title: "Manufacturing",
    description: "Revolutionizing production through intelligent automation",
    examples: [
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization"
    ]
  },
  {
    title: "Healthcare",
    description: "Enhancing patient care with automated processes",
    examples: [
      "Medical image analysis",
      "Patient data management",
      "Treatment planning"
    ]
  },
  {
    title: "Financial Services",
    description: "Automating complex financial operations",
    examples: [
      "Fraud detection",
      "Risk assessment",
      "Transaction processing"
    ]
  },
  {
    title: "Retail",
    description: "Transforming customer experience through automation",
    examples: [
      "Inventory management",
      "Personalized marketing",
      "Order fulfillment"
    ]
  }
];

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and streamline workflows",
    metrics: [
      "50% reduction in processing time",
      "90% accuracy improvement",
      "24/7 operation capability"
    ]
  },
  {
    title: "Cost Reduction",
    description: "Minimize operational costs through intelligent automation",
    metrics: [
      "40% cost savings",
      "Reduced manual errors",
      "Optimized resource allocation"
    ]
  },
  {
    title: "Enhanced Quality",
    description: "Improve consistency and accuracy in operations",
    metrics: [
      "99.9% accuracy rate",
      "Standardized processes",
      "Continuous improvement"
    ]
  }
];

export default function AIAutomationPage() {
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
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#00E6E6]">
              <Bot className="w-8 h-8" />
              <div className="flex items-center text-sm">
                Research
                <ChevronRight className="w-4 h-4 mx-1" />
                AI Automation
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              AI Automation: Transforming Business Through Intelligent Systems
            </h1>
            <p className="text-xl text-gray-400">
              Revolutionizing industries with advanced AI-powered automation solutions
            </p>
          </div>

          {/* Illustrations Section */}
          <div className="grid md:grid-cols-3 gap-6">
            {illustrations.map((img, index) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm text-white">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Features Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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

          {/* Industry Applications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Industry Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industryApplications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {app.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    {app.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Business Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {benefit.description}
                  </p>
                  <div className="space-y-2">
                    {benefit.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Transform Your Business Today</h2>
            <p className="text-gray-300">
              Ready to revolutionize your operations with AI automation? Partner with NextHomeLabs to implement cutting-edge automation solutions tailored to your needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="https://nexthomelabs.com" target="_blank">
                <Button 
                  className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
                >
                  Visit NextHomeLabs
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="https://centgpt.com" target="_blank">
                <Button 
                  variant="outline"
                  className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                >
                  Try CentGPT
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
