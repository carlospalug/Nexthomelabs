"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Cpu, ChevronRight, ExternalLink, Atom, Binary, Network, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    alt: "Quantum Computing Visualization",
    caption: "Next-generation quantum computing systems"
  },
  {
    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    alt: "Quantum AI Integration",
    caption: "Merging quantum computing with artificial intelligence"
  },
  {
    url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    alt: "Quantum Technology",
    caption: "Advanced quantum systems for complex computations"
  }
];

const quantumPrinciples = [
  {
    title: "Superposition",
    icon: Binary,
    description: "Qubits can exist in multiple states simultaneously, exponentially increasing computational power.",
    implications: [
      "Parallel processing",
      "Complex calculations",
      "Enhanced efficiency"
    ]
  },
  {
    title: "Entanglement",
    icon: Network,
    description: "Quantum particles remain connected regardless of distance, enabling instant information sharing.",
    implications: [
      "Secure communication",
      "Distributed computing",
      "Quantum networks"
    ]
  },
  {
    title: "Quantum Algorithms",
    icon: Braces,
    description: "Specialized algorithms that leverage quantum properties for unprecedented speed.",
    implications: [
      "Optimization problems",
      "Machine learning",
      "Cryptography"
    ]
  },
  {
    title: "Quantum-AI Integration",
    icon: Atom,
    description: "Combining quantum computing with AI for enhanced capabilities.",
    implications: [
      "Advanced modeling",
      "Pattern recognition",
      "Neural networks"
    ]
  }
];

const applications = [
  {
    title: "Drug Discovery",
    description: "Accelerating pharmaceutical research through quantum molecular simulations.",
    examples: [
      "Molecular modeling",
      "Drug interactions",
      "Protein folding"
    ]
  },
  {
    title: "Financial Modeling",
    description: "Optimizing investment strategies and risk assessment using quantum algorithms.",
    examples: [
      "Portfolio optimization",
      "Risk analysis",
      "Market prediction"
    ]
  },
  {
    title: "Climate Modeling",
    description: "Simulating complex climate systems for better environmental predictions.",
    examples: [
      "Weather forecasting",
      "Climate change models",
      "Environmental impact"
    ]
  },
  {
    title: "Cryptography",
    description: "Developing quantum-resistant security solutions for the future.",
    examples: [
      "Post-quantum cryptography",
      "Secure communications",
      "Data protection"
    ]
  }
];

const researchAreas = [
  {
    title: "Quantum Machine Learning",
    description: "Developing quantum algorithms for enhanced machine learning capabilities",
    focus: [
      "Neural network optimization",
      "Quantum feature spaces",
      "Hybrid algorithms"
    ]
  },
  {
    title: "Quantum Error Correction",
    description: "Improving the reliability and stability of quantum computations",
    focus: [
      "Error detection",
      "Fault tolerance",
      "Quantum memory"
    ]
  },
  {
    title: "Quantum Software Stack",
    description: "Building software tools and frameworks for quantum computing",
    focus: [
      "Quantum programming",
      "Compiler optimization",
      "Development tools"
    ]
  }
];

export default function QuantumComputingPage() {
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
              <Atom className="w-8 h-8" />
              <div className="flex items-center text-sm">
                Research
                <ChevronRight className="w-4 h-4 mx-1" />
                Quantum Computing & AI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Quantum Computing & AI: The Next Frontier of Computation
            </h1>
            <p className="text-xl text-gray-400">
              Exploring the revolutionary potential of quantum computing combined with artificial intelligence
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

          {/* Quantum Principles Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Quantum Computing Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quantumPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <principle.icon className="w-6 h-6 text-[#00E6E6]" />
                    <h3 className="text-xl font-semibold text-white">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    {principle.description}
                  </p>
                  <div className="space-y-2">
                    {principle.implications.map((implication, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {implication}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Real-World Applications</h2>
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

          {/* Research Areas Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Current Research Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    {area.focus.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Join the Quantum Revolution</h2>
            <p className="text-gray-300">
              At NextHomeLabs, we're pioneering the integration of quantum computing and AI. Join us in shaping the future of computation and problem-solving.
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
