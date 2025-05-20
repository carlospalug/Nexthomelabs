"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, ChevronRight, ExternalLink, Lock, AlertTriangle, Eye, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    alt: "AI-Powered Cybersecurity",
    caption: "Advanced AI systems protecting digital assets"
  },
  {
    url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80",
    alt: "Threat Detection",
    caption: "Real-time threat monitoring and detection"
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    alt: "Network Security",
    caption: "AI-enhanced network protection systems"
  }
];

const keyFeatures = [
  {
    title: "Threat Detection",
    icon: AlertTriangle,
    description: "AI-powered systems for identifying and analyzing security threats",
    capabilities: [
      "Real-time monitoring",
      "Pattern recognition",
      "Anomaly detection"
    ]
  },
  {
    title: "Automated Response",
    icon: Shield,
    description: "Instant automated responses to security incidents",
    capabilities: [
      "Threat containment",
      "System isolation",
      "Recovery protocols"
    ]
  },
  {
    title: "Predictive Analysis",
    icon: Eye,
    description: "Anticipating and preventing security breaches",
    capabilities: [
      "Risk assessment",
      "Vulnerability scanning",
      "Threat forecasting"
    ]
  },
  {
    title: "Network Security",
    icon: Network,
    description: "Protecting network infrastructure with AI",
    capabilities: [
      "Traffic analysis",
      "Access control",
      "Intrusion prevention"
    ]
  }
];

const applications = [
  {
    title: "Enterprise Security",
    description: "Comprehensive protection for business infrastructure",
    features: [
      "Network monitoring",
      "Data protection",
      "Access management"
    ]
  },
  {
    title: "Financial Security",
    description: "Protecting financial transactions and systems",
    features: [
      "Fraud detection",
      "Transaction monitoring",
      "Compliance enforcement"
    ]
  },
  {
    title: "Cloud Security",
    description: "Securing cloud-based infrastructure and services",
    features: [
      "Resource protection",
      "Access control",
      "Data encryption"
    ]
  },
  {
    title: "IoT Security",
    description: "Protecting connected devices and networks",
    features: [
      "Device monitoring",
      "Network isolation",
      "Threat prevention"
    ]
  }
];

const benefits = [
  {
    title: "Enhanced Detection",
    description: "Faster and more accurate threat detection",
    metrics: [
      "99.9% detection rate",
      "Real-time alerts",
      "Reduced false positives"
    ]
  },
  {
    title: "Automated Protection",
    description: "Continuous automated security monitoring",
    metrics: [
      "24/7 protection",
      "Instant response",
      "Proactive defense"
    ]
  },
  {
    title: "Cost Efficiency",
    description: "Reduced security operational costs",
    metrics: [
      "40% cost reduction",
      "Improved efficiency",
      "Resource optimization"
    ]
  }
];

export default function AICybersecurityPage() {
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
              <Shield className="w-8 h-8" />
              <div className="flex items-center text-sm">
                Research
                <ChevronRight className="w-4 h-4 mx-1" />
                AI for Cybersecurity
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              AI for Cybersecurity: Advanced Protection in the Digital Age
            </h1>
            <p className="text-xl text-gray-400">
              Leveraging artificial intelligence to detect, prevent, and respond to cyber threats
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

          {/* Applications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
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
                    {app.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Key Benefits</h2>
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
            <h2 className="text-2xl font-bold text-[#00E6E6]">Secure Your Digital Future</h2>
            <p className="text-gray-300">
              Partner with NextHomeLabs to implement cutting-edge AI cybersecurity solutions that protect your organization against evolving threats.
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
