"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Brain, ChevronRight, ExternalLink, Cpu, Network, Bot, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const illustrations = [
  {
    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    alt: "Advanced AI Systems",
    caption: "Next-generation artificial intelligence"
  },
  {
    url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    alt: "AI Innovation",
    caption: "Cutting-edge AI research and development"
  },
  {
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    alt: "Future Technology",
    caption: "Shaping the future through AI innovation"
  }
];

const trends = [
  {
    title: "Artificial General Intelligence",
    icon: Brain,
    description: "Development of AI systems capable of human-like reasoning across domains",
    implications: [
      "Cross-domain learning",
      "Adaptive intelligence",
      "Complex problem solving"
    ]
  },
  {
    title: "Edge AI",
    icon: Cpu,
    description: "AI processing at the edge for faster, more private computing",
    implications: [
      "Reduced latency",
      "Enhanced privacy",
      "Efficient processing"
    ]
  },
  {
    title: "AI-Human Collaboration",
    icon: Bot,
    description: "Enhanced interaction between humans and AI systems",
    implications: [
      "Augmented capabilities",
      "Intuitive interfaces",
      "Seamless integration"
    ]
  },
  {
    title: "Global AI Networks",
    icon: Globe2,
    description: "Interconnected AI systems working together across borders",
    implications: [
      "Distributed intelligence",
      "Global collaboration",
      "Shared learning"
    ]
  }
];

const applications = [
  {
    title: "Healthcare",
    description: "Revolutionary advancements in medical care through AI",
    features: [
      "Personalized medicine",
      "Disease prediction",
      "Automated diagnostics"
    ]
  },
  {
    title: "Education",
    description: "Transforming learning through intelligent systems",
    features: [
      "Adaptive learning",
      "Personalized curricula",
      "Global accessibility"
    ]
  },
  {
    title: "Environmental Protection",
    description: "Using AI to address climate change and sustainability",
    features: [
      "Climate modeling",
      "Resource optimization",
      "Conservation efforts"
    ]
  },
  {
    title: "Space Exploration",
    description: "Advancing space research and exploration with AI",
    features: [
      "Autonomous navigation",
      "Data analysis",
      "Mission planning"
    ]
  }
];

const challenges = [
  {
    title: "Ethical Considerations",
    description: "Addressing moral implications of advanced AI",
    focus: [
      "Bias mitigation",
      "Fairness",
      "Transparency"
    ]
  },
  {
    title: "Technical Hurdles",
    description: "Overcoming computational and algorithmic challenges",
    focus: [
      "Scalability",
      "Efficiency",
      "Reliability"
    ]
  },
  {
    title: "Social Impact",
    description: "Managing societal changes from AI adoption",
    focus: [
      "Job transformation",
      "Skill adaptation",
      "Social integration"
    ]
  }
];

const vision = [
  {
    title: "Universal Access",
    description: "Making AI technology accessible to everyone",
    goals: [
      "Global availability",
      "Affordable solutions",
      "User-friendly interfaces"
    ]
  },
  {
    title: "Sustainable Development",
    description: "Using AI to create a more sustainable future",
    goals: [
      "Environmental protection",
      "Resource efficiency",
      "Clean energy"
    ]
  },
  {
    title: "Human Empowerment",
    description: "Enhancing human capabilities through AI",
    goals: [
      "Skill augmentation",
      "Knowledge access",
      "Creative enhancement"
    ]
  }
];

export default function FutureOfAIPage() {
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
              <Brain className="w-8 h-8" />
              <div className="flex items-center text-sm">
                Research
                <ChevronRight className="w-4 h-4 mx-1" />
                Future of AI
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              The Future of AI: Shaping Tomorrow's Technology
            </h1>
            <p className="text-xl text-gray-400">
              Exploring the next frontier of artificial intelligence and its transformative potential
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

          {/* Emerging Trends Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Emerging Trends</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {trends.map((trend, index) => (
                <motion.div
                  key={trend.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <trend.icon className="w-6 h-6 text-[#00E6E6]" />
                    <h3 className="text-xl font-semibold text-white">
                      {trend.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4">
                    {trend.description}
                  </p>
                  <div className="space-y-2">
                    {trend.implications.map((implication, i) => (
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

          {/* Future Applications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Future Applications</h2>
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

          {/* Challenges Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Challenges and Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                    {challenge.focus.map((item, i) => (
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

          {/* Vision Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Our Vision for AI</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {vision.map((item, index) => (
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
                    {item.goals.map((goal, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {goal}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Shape the Future with Us</h2>
            <p className="text-gray-300">
              Join NextHomeLabs in building the next generation of AI technology. Together, we can create solutions that transform industries and improve lives.
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
