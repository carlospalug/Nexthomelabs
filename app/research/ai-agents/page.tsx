"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Bot, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    alt: "Collaborative Robots",
    caption: "AI agents working together in complex environments"
  },
  {
    url: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
    alt: "Network Connections",
    caption: "Multi-agent systems communicating and coordinating"
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital Intelligence",
    caption: "The future of collaborative artificial intelligence"
  }
];

export default function AIAgentsPage() {
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
                AI Agents
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              AI Agents and Multi-Agent Systems: Collaborative Intelligence for a Dynamic World
            </h1>
            <p className="text-xl text-gray-400">
              Exploring the future of autonomous systems working together to solve complex challenges
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

          {/* Introduction */}
          <section className="space-y-6 prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              Artificial Intelligence is evolving beyond singular systems to encompass complex ecosystems of interacting agents. These AI Agents and Multi-Agent Systems (MAS) represent a transformative shift in AI, enabling autonomous entities to collaborate, compete, and adapt in dynamic environments.
            </p>
          </section>

          {/* What are AI Agents Section */}
          <section className="space-y-6 prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-[#00E6E6]">What are AI Agents and Multi-Agent Systems?</h2>
            <p className="text-gray-300 leading-relaxed">
              An AI agent is a self-contained system capable of perceiving its environment, making decisions, and taking actions to achieve specific goals. When multiple agents interact within a shared environment, they form a Multi-Agent System (MAS). These systems are designed to collaborate, compete, and adapt based on their interactions and environmental changes.
            </p>
            <div className="bg-[#00E6E6]/5 border border-[#00E6E6]/20 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Core Features of AI Agents</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6] mt-2" />
                  <span><strong className="text-white">Autonomy:</strong> The ability to make decisions and perform tasks without external intervention.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6] mt-2" />
                  <span><strong className="text-white">Perception:</strong> Gathering and interpreting data from the environment using sensors and inputs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6] mt-2" />
                  <span><strong className="text-white">Reasoning:</strong> Analyzing information to determine optimal actions based on goals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6] mt-2" />
                  <span><strong className="text-white">Learning:</strong> Adapting behavior through experience and feedback.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6] mt-2" />
                  <span><strong className="text-white">Communication:</strong> Exchanging information with other agents to coordinate activities.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Applications Section */}
          <section className="space-y-6 prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Applications of Multi-Agent Systems</h2>
            <p className="text-gray-300 leading-relaxed">
              Multi-agent systems are revolutionizing industries by enabling sophisticated interactions and problem-solving. Here are some key applications:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Robotics",
                  description: "Teams of robots working collaboratively in tasks like warehouse automation, search and rescue, and autonomous exploration."
                },
                {
                  title: "Smart Grids",
                  description: "Distributed energy management systems where agents optimize energy production and consumption across networks."
                },
                {
                  title: "Healthcare",
                  description: "Coordinated AI agents assist in patient monitoring, diagnostics, and resource allocation in hospitals."
                },
                {
                  title: "Transportation",
                  description: "Autonomous vehicles communicate with each other and traffic management systems to improve safety and efficiency."
                }
              ].map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {app.title}
                  </h3>
                  <p className="text-gray-400">
                    {app.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CentGPT Integration */}
          <section className="space-y-6 prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-[#00E6E6]">AI Agents in CentGPT</h2>
            <p className="text-gray-300 leading-relaxed">
              At NextHomeLabs, we integrate AI agents and multi-agent system principles into CentGPT, enabling unparalleled collaborative intelligence. Our implementation focuses on:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Task Delegation",
                  description: "CentGPT assigns and coordinates tasks among virtual agents for efficient problem-solving."
                },
                {
                  title: "Collaborative Workflows",
                  description: "Agents work together to handle complex projects, ensuring seamless interaction and execution."
                },
                {
                  title: "Dynamic Adaptation",
                  description: "CentGPT's agents adjust to changing conditions, maintaining efficiency and accuracy."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Future Vision */}
          <section className="space-y-6 prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-[#00E6E6]">The Future of Multi-Agent Systems</h2>
            <p className="text-gray-300 leading-relaxed">
              As the field of AI continues to advance, the potential for multi-agent systems grows exponentially. Our vision for the future includes:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Self-Healing Systems",
                  description: "Agents that identify and resolve issues autonomously, ensuring uninterrupted operations."
                },
                {
                  title: "Global Coordination",
                  description: "Large-scale MAS capable of managing complex global challenges, such as climate change and disaster response."
                },
                {
                  title: "Human-Agent Collaboration",
                  description: "Enhancing interactions between humans and agents for more intuitive and productive outcomes."
                },
                {
                  title: "Ethical MAS",
                  description: "Embedding ethical guidelines into agent behavior, promoting fairness and accountability."
                }
              ].map((vision, index) => (
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
            <h2 className="text-2xl font-bold text-[#00E6E6]">Join the Future of AI</h2>
            <p className="text-gray-300">
              At NextHomeLabs, we believe that AI agents and multi-agent systems represent the next frontier in artificial intelligence. By fostering collaboration, adaptability, and intelligence, these systems have the potential to revolutionize industries and solve some of humanity's most pressing challenges.
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
