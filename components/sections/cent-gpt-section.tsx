"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Code2, 
  MessageSquareText, 
  Image as ImageIcon,
  Sparkles,
  Lock,
  X
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Understanding",
    description: "State-of-the-art natural language processing capabilities for human-like comprehension",
    details: {
      capabilities: [
        "Context-aware responses",
        "Multi-turn conversations",
        "Sentiment analysis",
        "Entity recognition"
      ],
      useCases: [
        "Customer support automation",
        "Content generation",
        "Data analysis",
        "Research assistance"
      ],
      benefits: [
        "Reduced response time",
        "Improved accuracy",
        "24/7 availability",
        "Scalable solutions"
      ]
    }
  },
  {
    icon: Code2,
    title: "Expert Code Generation",
    description: "Production-ready code generation across multiple programming languages",
    details: {
      capabilities: [
        "Multi-language support",
        "Framework integration",
        "Best practices adherence",
        "Documentation generation"
      ],
      useCases: [
        "API development",
        "Frontend components",
        "Database queries",
        "Test case generation"
      ],
      benefits: [
        "Faster development",
        "Reduced errors",
        "Consistent coding standards",
        "Improved productivity"
      ]
    }
  },
  {
    icon: MessageSquareText,
    title: "Multi-Modal Learning",
    description: "Seamless processing of text, images, and structured data",
    details: {
      capabilities: [
        "Text analysis",
        "Image recognition",
        "Data visualization",
        "Pattern detection"
      ],
      useCases: [
        "Document processing",
        "Visual search",
        "Data analysis",
        "Content moderation"
      ],
      benefits: [
        "Comprehensive analysis",
        "Enhanced understanding",
        "Versatile applications",
        "Improved accuracy"
      ]
    }
  },
  {
    icon: ImageIcon,
    title: "Visual Analysis",
    description: "Advanced image understanding and generation capabilities",
    details: {
      capabilities: [
        "Object detection",
        "Scene understanding",
        "Image generation",
        "Visual search"
      ],
      useCases: [
        "Product recognition",
        "Content moderation",
        "Design assistance",
        "Visual QA"
      ],
      benefits: [
        "Automated processing",
        "Enhanced accuracy",
        "Time savings",
        "Scalable solutions"
      ]
    }
  },
  {
    icon: Sparkles,
    title: "Creative Problem Solving",
    description: "Innovative approaches to complex challenges using AI",
    details: {
      capabilities: [
        "Pattern recognition",
        "Solution optimization",
        "Strategy generation",
        "Decision support"
      ],
      useCases: [
        "Business strategy",
        "Process optimization",
        "Innovation ideation",
        "Risk analysis"
      ],
      benefits: [
        "Improved outcomes",
        "Novel solutions",
        "Faster resolution",
        "Data-driven decisions"
      ]
    }
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Built-in security features for enterprise-grade protection",
    details: {
      capabilities: [
        "Data encryption",
        "Access control",
        "Audit logging",
        "Compliance monitoring"
      ],
      useCases: [
        "Secure communications",
        "Data protection",
        "Compliance management",
        "Risk mitigation"
      ],
      benefits: [
        "Enhanced protection",
        "Regulatory compliance",
        "Reduced risk",
        "Peace of mind"
      ]
    }
  }
];

interface FeatureModalProps {
  feature: typeof features[0];
  onClose: () => void;
}

function FeatureModal({ feature, onClose }: FeatureModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-2xl p-6 bg-black border border-[#00E6E6]/20 rounded-xl shadow-xl m-4"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <feature.icon className="w-8 h-8 text-[#00E6E6]" />
            <h3 className="text-2xl font-bold">{feature.title}</h3>
          </div>

          <p className="text-gray-300">{feature.description}</p>

          <div className="grid gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[#00E6E6] mb-3">Key Capabilities</h4>
              <ul className="grid grid-cols-2 gap-2">
                {feature.details.capabilities.map((capability, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#00E6E6] mb-3">Use Cases</h4>
              <ul className="grid grid-cols-2 gap-2">
                {feature.details.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#00E6E6] mb-3">Key Benefits</h4>
              <ul className="grid grid-cols-2 gap-2">
                {feature.details.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <Button
              onClick={onClose}
              className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
            >
              Close
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CentGPTSection() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,230,230,0.1),transparent_50%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(0, 230, 230, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00E6E6] to-white">
              Cent-GPT
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              NextHomeLabs' flagship AI model and central hub of knowledge, engineered to transform how businesses 
              and individuals engage with artificial intelligence.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-black to-gray-900 border border-[#00E6E6]/20 hover:border-[#00E6E6]/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedFeature(feature)}
              >
                <feature.icon className="w-12 h-12 text-[#00E6E6] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="https://centgpt.com" target="_blank">
              <Button 
                size="lg"
                className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black text-lg px-8 py-6 h-auto"
              >
                Get Early Access
              </Button>
            </Link>
            <p className="mt-4 text-gray-400">
              Limited spots available for beta testing
            </p>
          </motion.div>
        </div>
      </div>

      {/* Feature Modal */}
      {selectedFeature && (
        <FeatureModal 
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </section>
  );
}
