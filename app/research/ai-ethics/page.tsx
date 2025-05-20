"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    alt: "AI Ethics Visualization",
    caption: "Building ethical frameworks for artificial intelligence"
  },
  {
    url: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?auto=format&fit=crop&w=1200&q=80",
    alt: "Bias Detection",
    caption: "Advanced systems for identifying and mitigating AI bias"
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Ethical AI Development",
    caption: "Developing AI systems with fairness and transparency"
  }
];

const ethicalPrinciples = [
  {
    title: "Fairness & Non-discrimination",
    description: "Ensuring AI systems treat all individuals and groups equitably, avoiding unfair bias based on protected characteristics.",
    examples: [
      "Regular bias audits",
      "Diverse training data",
      "Fair outcome metrics"
    ]
  },
  {
    title: "Transparency & Explainability",
    description: "Making AI decision-making processes clear and understandable to users and stakeholders.",
    examples: [
      "Decision explanations",
      "Model documentation",
      "Process visibility"
    ]
  },
  {
    title: "Privacy & Security",
    description: "Protecting user data and ensuring AI systems respect individual privacy rights.",
    examples: [
      "Data encryption",
      "Consent management",
      "Access controls"
    ]
  },
  {
    title: "Accountability",
    description: "Taking responsibility for AI system outcomes and providing mechanisms for redress.",
    examples: [
      "Impact assessments",
      "Governance frameworks",
      "Appeals processes"
    ]
  }
];

const biasTypes = [
  {
    title: "Data Bias",
    description: "When training data doesn't represent all groups fairly",
    mitigation: "Using diverse, representative datasets and regular data audits"
  },
  {
    title: "Algorithmic Bias",
    description: "When AI models make unfair decisions based on protected attributes",
    mitigation: "Implementing fairness constraints and bias detection systems"
  },
  {
    title: "Interaction Bias",
    description: "When AI systems interact differently with various user groups",
    mitigation: "Testing with diverse user groups and continuous monitoring"
  }
];

const implementation = [
  {
    title: "Ethics by Design",
    description: "Incorporating ethical considerations from the start of AI development",
    steps: [
      "Ethical impact assessment",
      "Stakeholder consultation",
      "Regular ethical reviews"
    ]
  },
  {
    title: "Continuous Monitoring",
    description: "Regular assessment of AI systems for emerging biases and ethical issues",
    steps: [
      "Automated bias detection",
      "Performance monitoring",
      "User feedback analysis"
    ]
  },
  {
    title: "Transparent Reporting",
    description: "Clear communication about AI system behavior and decision-making",
    steps: [
      "Regular public reports",
      "Decision explanations",
      "Impact assessments"
    ]
  }
];

export default function AIEthicsPage() {
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
                AI Ethics & Bias
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              AI Ethics & Bias: Building Fair and Responsible AI Systems
            </h1>
            <p className="text-xl text-gray-400">
              Developing ethical frameworks and solutions for bias-free artificial intelligence
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

          {/* Ethical Principles Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Core Ethical Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {ethicalPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {principle.description}
                  </p>
                  <div className="space-y-2">
                    {principle.examples.map((example, i) => (
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

          {/* Bias Types Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Understanding AI Bias</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {biasTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {type.description}
                  </p>
                  <div className="text-[#00E6E6] text-sm">
                    Mitigation: {type.mitigation}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Implementation Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Implementation at NextHomeLabs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {implementation.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    {item.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {step}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Join Us in Building Ethical AI</h2>
            <p className="text-gray-300">
              At NextHomeLabs, we're committed to developing AI systems that are not only powerful but also fair, transparent, and accountable. Join us in our mission to create ethical AI solutions that benefit everyone.
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
