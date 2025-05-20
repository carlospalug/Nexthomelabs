"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Database, ChevronRight, ExternalLink, Building2, Briefcase, FileCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    alt: "Enterprise Blockchain Solutions",
    caption: "Transforming businesses through blockchain technology"
  },
  {
    url: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1200&q=80",
    alt: "Supply Chain Tracking",
    caption: "Blockchain-powered supply chain transparency"
  },
  {
    url: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=1200&q=80",
    alt: "Financial Services",
    caption: "Revolutionizing finance with blockchain solutions"
  }
];

const industries = [
  {
    title: "Financial Services",
    icon: Building2,
    description: "Transforming financial operations with blockchain technology",
    applications: [
      "Cross-border payments",
      "Asset tokenization",
      "Decentralized lending",
      "Trade finance"
    ]
  },
  {
    title: "Supply Chain",
    icon: Briefcase,
    description: "Enhancing transparency and traceability in supply chains",
    applications: [
      "Product tracking",
      "Authenticity verification",
      "Inventory management",
      "Supplier verification"
    ]
  },
  {
    title: "Healthcare",
    icon: FileCheck,
    description: "Securing and streamlining healthcare operations",
    applications: [
      "Medical records",
      "Drug traceability",
      "Clinical trials",
      "Insurance claims"
    ]
  },
  {
    title: "Government",
    icon: ShieldCheck,
    description: "Improving public services through blockchain",
    applications: [
      "Digital identity",
      "Land registry",
      "Voting systems",
      "Public records"
    ]
  }
];

const solutions = [
  {
    title: "Smart Contracts",
    description: "Automated, self-executing contracts for business processes",
    features: [
      "Automated execution",
      "Reduced intermediaries",
      "Cost efficiency",
      "Enhanced security"
    ]
  },
  {
    title: "Digital Identity",
    description: "Secure and verifiable identity management solutions",
    features: [
      "Self-sovereign identity",
      "Privacy protection",
      "Credential verification",
      "Access control"
    ]
  },
  {
    title: "Asset Tokenization",
    description: "Converting real-world assets into digital tokens",
    features: [
      "Fractional ownership",
      "Increased liquidity",
      "Automated compliance",
      "Reduced costs"
    ]
  }
];

const benefits = [
  {
    title: "Enhanced Security",
    description: "Immutable records and cryptographic protection",
    metrics: [
      "99.9% data integrity",
      "Reduced fraud risk",
      "Enhanced privacy"
    ]
  },
  {
    title: "Operational Efficiency",
    description: "Streamlined processes and reduced costs",
    metrics: [
      "40% cost reduction",
      "Faster transactions",
      "Automated compliance"
    ]
  },
  {
    title: "Transparency",
    description: "Complete visibility and traceability",
    metrics: [
      "Real-time tracking",
      "Auditable records",
      "Stakeholder trust"
    ]
  }
];

export default function BlockchainApplicationsPage() {
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
              <Database className="w-8 h-8" />
              <div className="flex items-center text-sm">
                Research
                <ChevronRight className="w-4 h-4 mx-1" />
                Blockchain Applications
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Blockchain Applications: Transforming Industries Through Innovation
            </h1>
            <p className="text-xl text-gray-400">
              Implementing real-world blockchain solutions to revolutionize business operations
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

          {/* Industries Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Industry Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <industry.icon className="w-6 h-6 text-[#00E6E6]" />
                    <h3 className="text-xl font-semibold text-white">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.applications.map((app, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {app}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Solutions Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Blockchain Solutions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    {solution.features.map((feature, i) => (
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
            <h2 className="text-2xl font-bold text-[#00E6E6]">Transform Your Business with Blockchain</h2>
            <p className="text-gray-300">
              Ready to leverage blockchain technology for your organization? Partner with NextHomeLabs to implement innovative blockchain solutions tailored to your needs.
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
