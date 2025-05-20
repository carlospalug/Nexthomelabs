"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Database, ChevronRight, ExternalLink, Lock, Cpu, Network, FileCode2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    alt: "Blockchain Network Visualization",
    caption: "Decentralized networks powering the future of technology"
  },
  {
    url: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1200&q=80",
    alt: "Smart Contracts",
    caption: "Self-executing contracts on the blockchain"
  },
  {
    url: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=1200&q=80",
    alt: "Blockchain Security",
    caption: "Advanced cryptography ensuring data integrity"
  }
];

const coreComponents = [
  {
    title: "Decentralized Ledger",
    icon: Database,
    description: "A distributed database that maintains a continuously growing list of records.",
    features: [
      "No central authority",
      "Transparent records",
      "Immutable data"
    ]
  },
  {
    title: "Consensus Mechanisms",
    icon: Network,
    description: "Protocols ensuring all network participants agree on the validity of transactions.",
    features: [
      "Proof of Work (PoW)",
      "Proof of Stake (PoS)",
      "Byzantine Fault Tolerance"
    ]
  },
  {
    title: "Smart Contracts",
    icon: FileCode2,
    description: "Self-executing contracts with terms directly written into code.",
    features: [
      "Automated execution",
      "Transparent rules",
      "Reduced intermediaries"
    ]
  },
  {
    title: "Cryptography",
    icon: Lock,
    description: "Advanced encryption ensuring security and privacy of transactions.",
    features: [
      "Public/private keys",
      "Hash functions",
      "Digital signatures"
    ]
  }
];

const applications = [
  {
    title: "Financial Services",
    description: "Revolutionizing banking and finance through decentralized solutions.",
    examples: [
      "Cross-border payments",
      "Decentralized lending",
      "Asset tokenization"
    ]
  },
  {
    title: "Supply Chain",
    description: "Enhancing transparency and traceability in global supply chains.",
    examples: [
      "Product tracking",
      "Authenticity verification",
      "Inventory management"
    ]
  },
  {
    title: "Healthcare",
    description: "Securing patient data and streamlining healthcare processes.",
    examples: [
      "Medical records",
      "Drug traceability",
      "Clinical trials"
    ]
  },
  {
    title: "Government",
    description: "Improving public services through transparent blockchain systems.",
    examples: [
      "Digital identity",
      "Voting systems",
      "Land registry"
    ]
  }
];

const benefits = [
  {
    title: "Enhanced Security",
    description: "Cryptographic protection against tampering and fraud",
    icon: Lock
  },
  {
    title: "Transparency",
    description: "Complete visibility of all transactions and records",
    icon: Database
  },
  {
    title: "Efficiency",
    description: "Automated processes reducing time and costs",
    icon: Cpu
  }
];

export default function BlockchainBasicsPage() {
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
                Blockchain Basics
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Understanding Blockchain Technology: The Foundation of Digital Trust
            </h1>
            <p className="text-xl text-gray-400">
              Explore the fundamental concepts and transformative potential of blockchain technology
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

          {/* Core Components Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Core Components</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coreComponents.map((component, index) => (
                <motion.div
                  key={component.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <component.icon className="w-6 h-6 text-[#00E6E6]" />
                    <h3 className="text-xl font-semibold text-white">
                      {component.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    {component.description}
                  </p>
                  <div className="space-y-2">
                    {component.features.map((feature, i) => (
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

          {/* Applications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Industry Applications</h2>
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
            <h2 className="text-2xl font-bold text-[#00E6E6]">Key Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm text-center"
                >
                  <benefit.icon className="w-12 h-12 text-[#00E6E6] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Start Your Blockchain Journey</h2>
            <p className="text-gray-300">
              At NextHomeLabs, we're committed to making blockchain technology accessible and practical. Join us in building the future of decentralized systems.
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
