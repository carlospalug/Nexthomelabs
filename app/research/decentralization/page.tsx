"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    alt: "Decentralized Network",
    caption: "Distributed networks powering the future of technology"
  },
  {
    url: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1200&q=80",
    alt: "Blockchain Technology",
    caption: "Secure and transparent blockchain systems"
  },
  {
    url: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=1200&q=80",
    alt: "Global Connectivity",
    caption: "Connecting communities through decentralized solutions"
  }
];

const keyFeatures = [
  {
    title: "Transparency",
    description: "Decentralised systems operate on public or distributed ledgers, ensuring accountability and visibility."
  },
  {
    title: "Autonomy",
    description: "Participants have more control over their data, decisions, and interactions."
  },
  {
    title: "Resilience",
    description: "By eliminating single points of failure, decentralised systems are more robust against disruptions and attacks."
  },
  {
    title: "Inclusivity",
    description: "Decentralisation empowers individuals and communities to participate in decision-making processes, reducing inequalities."
  }
];

const applications = [
  {
    title: "Finance",
    items: [
      "Decentralised Finance (DeFi)",
      "Cryptocurrencies",
      "Crowdfunding"
    ]
  },
  {
    title: "Governance",
    items: [
      "Decentralised Voting Systems",
      "Community-Driven Decision-Making"
    ]
  },
  {
    title: "Healthcare",
    items: [
      "Patient-Centric Data",
      "Collaborative Research"
    ]
  },
  {
    title: "Supply Chain",
    items: [
      "Enhanced Traceability",
      "Reduced Fraud"
    ]
  },
  {
    title: "Education",
    items: [
      "Open Learning Platforms",
      "Credential Verification"
    ]
  },
  {
    title: "Energy",
    items: [
      "Peer-to-Peer Energy Trading",
      "Decentralised Grids"
    ]
  }
];

const futureVision = [
  {
    title: "Decentralised AI Systems",
    description: "Creating AI networks that operate transparently and collaboratively without central control."
  },
  {
    title: "Global Decentralised Economies",
    description: "Enabling borderless trade and economic inclusion through decentralised systems."
  },
  {
    title: "Decentralised Identity Solutions",
    description: "Providing secure, universal, and self-sovereign identity verification."
  },
  {
    title: "Blockchain-Powered Governance",
    description: "Enhancing transparency and efficiency in public and private governance structures."
  },
  {
    title: "Decentralised Social Networks",
    description: "Empowering users with control over their data and interactions."
  },
  {
    title: "Environmental Sustainability",
    description: "Leveraging decentralisation to promote sustainable resource management and conservation efforts."
  }
];

const challenges = [
  {
    title: "Scalability",
    description: "Ensuring that decentralised systems can handle large-scale operations efficiently."
  },
  {
    title: "Interoperability",
    description: "Enabling seamless communication and integration between different decentralised platforms."
  },
  {
    title: "Regulatory Compliance",
    description: "Addressing legal and regulatory concerns across jurisdictions."
  },
  {
    title: "Adoption Barriers",
    description: "Overcoming resistance to change and lack of awareness among potential users."
  },
  {
    title: "Governance Structures",
    description: "Designing fair and effective governance mechanisms for decentralised networks."
  }
];

export default function DecentralizationPage() {
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
                Decentralisation
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Decentralisation: Transforming Systems for a Better Future
            </h1>
            <p className="text-xl text-gray-400">
              In an increasingly interconnected world, decentralisation has emerged as a powerful paradigm, challenging traditional centralized structures.
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

          {/* What is Decentralisation Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">What is Decentralisation?</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                Decentralisation refers to the process of distributing decision-making authority, control, and operations away from a central entity. Unlike centralized systems, where power is concentrated in a single authority, decentralized systems distribute control across multiple independent nodes or participants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm h-full">
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#00E6E6] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Applications Across Industries</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {app.title}
                  </h3>
                  <ul className="space-y-2">
                    {app.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Challenges Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Challenges and Opportunities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-400">
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Future Vision Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">The Future of Decentralisation</h2>
            <p className="text-gray-300">
              The potential of decentralisation extends far beyond its current applications. At NextHomeLabs, our vision encompasses revolutionary changes across multiple domains.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {futureVision.map((vision, index) => (
                <motion.div
                  key={vision.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {vision.title}
                  </h3>
                  <p className="text-gray-400">
                    {vision.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Join the Movement</h2>
            <p className="text-gray-300">
              At NextHomeLabs, we believe that decentralisation is not just a technological shift—it is a movement towards a more equitable and transparent future. By integrating decentralisation with AI and other advanced technologies, we aim to create systems that empower individuals and transform industries.
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
