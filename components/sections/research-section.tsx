"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Bot, Link, Circle as CircleHalf, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const researchTopics = [
  {
    title: "Advanced Machine Learning",
    description: "Exploring cutting-edge machine learning algorithms and techniques to solve complex problems and enhance AI capabilities.",
    icon: Brain,
    href: "/research/machine-learning"
  },
  {
    title: "Decentralization",
    description: "Exploring real-world implications of decentralization across different sectors",
    icon: Shield,
    href: "/research/decentralization"
  },
  {
    title: "AI Agents and Multi-Agent Systems",
    description: "Exploring the design and implementation of autonomous agents and multi-agent systems that can collaborate and compete in dynamic environments.",
    icon: Bot,
    href: "/research/ai-agents"
  },
  {
    title: "Explainable AI",
    description: "Developing techniques to make AI decision-making processes more transparent and understandable, allowing users to trust and effectively manage AI-driven systems.",
    icon: Link,
    href: "/research/explainable-ai"
  },
  {
    title: "AI Ethics and Bias Mitigation",
    description: "Researching methods to ensure that AI systems are fair, unbiased, and ethical, promoting trust and social responsibility in AI applications.",
    icon: CircleHalf,
    href: "/research/ai-ethics"
  },
  {
    title: "Blockchain Basics",
    description: "Understanding the core concepts and principles of blockchain technology.",
    icon: Shield,
    href: "/research/blockchain-basics"
  },
  {
    title: "Quantum Computing and AI",
    description: "Investigating the potential of quantum computing to accelerate AI processes and solve complex problems that are infeasible for classical computers.",
    icon: Brain,
    href: "/research/quantum-computing"
  },
  {
    title: "AI Automation",
    description: "Revolutionizing industries through intelligent automation solutions",
    icon: Bot,
    href: "/research/automation"
  },
  {
    title: "AI for Cybersecurity",
    description: "Leveraging AI to detect and prevent cyber threats in real-time, enhancing the security and resilience of digital systems.",
    icon: ShieldCheck,
    href: "/research/cybersecurity"
  },
  {
    title: "Blockchain Applications",
    description: "Exploring real-world applications of blockchain technology across various industries.",
    icon: Shield,
    href: "/research/blockchain-applications"
  },
  {
    title: "Future of AI",
    description: "Exploring the transformative potential and trajectory of AI",
    icon: Bot,
    href: "/research/future-of-ai"
  }
];

export function ResearchSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);

  const handleLearnMore = (href: string) => {
    // Save current scroll position before navigation
    if (typeof window !== 'undefined') {
      const scrollPosition = window.scrollY;
      sessionStorage.setItem(
        `scrollPosition-${window.location.pathname}${window.location.search}`,
        scrollPosition.toString()
      );
      
      // Also save which research topic was clicked
      sessionStorage.setItem('lastResearchTopic', href);
    }
    
    router.push(href);
  };

  // Mark this section for scroll restoration
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.setAttribute('data-section', 'research');
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black relative research-section">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Our Research and Focus</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            At NextHomeLabs, we're dedicated to pushing the boundaries of AI and blockchain technologies through innovative research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/50 hover:bg-black/70 transition-all duration-300 group"
              aria-label={`Learn more about ${topic.title}`}
              tabIndex={0}
              role="button"
              onClick={() => handleLearnMore(topic.href)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleLearnMore(topic.href);
                }
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <topic.icon className="w-10 h-10 text-[#00E6E6]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#00E6E6] group-hover:text-white transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-400 flex-grow">
                  {topic.description}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLearnMore(topic.href);
                  }}
                  className="mt-4 text-[#00E6E6] hover:text-white transition-colors text-sm font-medium"
                  aria-label={`Learn more about ${topic.title}`}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}