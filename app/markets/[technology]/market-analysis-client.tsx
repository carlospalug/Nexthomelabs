"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MarketData {
  title: string;
  description: string;
  keyPoints: string[];
  marketSize: {
    current: string;
    projected: string;
    cagr: string;
  };
  adoption: {
    current: string;
    projected: string;
    challenges: string[];
  };
  trends: string[];
}

const fetchMarketData = async (technology: string): Promise<MarketData> => {
  // Simulating an API call - in production, this would fetch from a real API
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  const data: Record<string, MarketData> = {
    'blockchain': {
      title: "Blockchain Technology Market Analysis",
      description: "Blockchain technology continues to revolutionize various industries through its decentralized, secure, and transparent nature.",
      keyPoints: [
        "Increasing adoption in finance and banking",
        "Growing implementation in supply chain management",
        "Rising demand for secure, decentralized solutions",
        "Expansion into new sectors like healthcare and real estate"
      ],
      marketSize: {
        current: "$105B",
        projected: "$1.5T by 2030",
        cagr: "85.9% (2024-2030)"
      },
      adoption: {
        current: "32%",
        projected: "65% by 2030",
        challenges: [
          "Regulatory uncertainty",
          "Technical complexity",
          "Integration with legacy systems",
          "Energy consumption concerns"
        ]
      },
      trends: [
        "Rise of DeFi applications",
        "Integration with IoT",
        "Green blockchain initiatives",
        "Enterprise blockchain solutions"
      ]
    },
    'ai': {
      title: "Artificial Intelligence Market Analysis",
      description: "AI technology is transforming businesses across all sectors, enabling automation, insights, and innovation.",
      keyPoints: [
        "Widespread adoption in business operations",
        "Integration with cloud computing",
        "Advanced natural language processing",
        "Computer vision applications"
      ],
      marketSize: {
        current: "$130B",
        projected: "$1.8T by 2030",
        cagr: "38.1% (2024-2030)"
      },
      adoption: {
        current: "48%",
        projected: "85% by 2030",
        challenges: [
          "Data quality and availability",
          "Ethical considerations",
          "Skill gap in workforce",
          "Implementation costs"
        ]
      },
      trends: [
        "Generative AI advancement",
        "Edge AI deployment",
        "AI in cybersecurity",
        "Autonomous systems"
      ]
    },
    'ai-agents': {
      title: "AI Agents Market Analysis",
      description: "AI agents are revolutionizing automation and decision-making processes across industries.",
      keyPoints: [
        "Autonomous decision-making capabilities",
        "Multi-agent system adoption",
        "Integration with business processes",
        "Enhanced customer service applications"
      ],
      marketSize: {
        current: "$45B",
        projected: "$1.0T by 2030",
        cagr: "42.3% (2024-2030)"
      },
      adoption: {
        current: "25%",
        projected: "60% by 2030",
        challenges: [
          "Complex implementation",
          "Security concerns",
          "Integration challenges",
          "Performance reliability"
        ]
      },
      trends: [
        "Collaborative AI agents",
        "Reinforcement learning advances",
        "Natural language interfaces",
        "Predictive analytics"
      ]
    },
    'machine-learning': {
      title: "Machine Learning Market Analysis",
      description: "Machine learning continues to drive innovation through data-driven insights and predictions.",
      keyPoints: [
        "Deep learning advancements",
        "AutoML adoption",
        "Edge computing integration",
        "Specialized hardware acceleration"
      ],
      marketSize: {
        current: "$85B",
        projected: "$1.4T by 2030",
        cagr: "35.7% (2024-2030)"
      },
      adoption: {
        current: "35%",
        projected: "75% by 2030",
        challenges: [
          "Data quality requirements",
          "Model interpretability",
          "Computing resources",
          "Talent acquisition"
        ]
      },
      trends: [
        "Transfer learning adoption",
        "MLOps maturity",
        "Federated learning",
        "Quantum ML research"
      ]
    }
  };

  return data[technology] || null;
};

export function MarketAnalysisClient() {
  const params = useParams();
  const [data, setData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const technology = params.technology as string;
      const marketData = await fetchMarketData(technology);
      setData(marketData);
      setLoading(false);
    };

    loadData();
  }, [params.technology]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#00E6E6] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Market data not found</h1>
          <Link href="/" className="text-[#00E6E6] hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-24">
        <Link 
          href="/"
          className="inline-flex items-center text-[#00E6E6] hover:text-[#00E6E6]/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Overview
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{data.title}</h1>
            <p className="text-xl text-gray-300">{data.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Market Size */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-4">Market Size</h2>
              <div className="space-y-2">
                <p className="text-[#00E6E6]">Current: {data.marketSize.current}</p>
                <p className="text-[#00E6E6]">Projected: {data.marketSize.projected}</p>
                <p className="text-[#00E6E6]">CAGR: {data.marketSize.cagr}</p>
              </div>
            </motion.div>

            {/* Adoption */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-4">Adoption</h2>
              <div className="space-y-2">
                <p className="text-[#00E6E6]">Current: {data.adoption.current}</p>
                <p className="text-[#00E6E6]">Projected: {data.adoption.projected}</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-4">Key Points</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {data.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-4">Adoption Challenges</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {data.adoption.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Trends */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4">Current Trends</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {data.trends.map((trend, index) => (
                <li key={index}>{trend}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
