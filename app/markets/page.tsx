"use client";

import { motion } from "framer-motion";
import { MarketGraphSection } from "@/components/sections/market-graph-section";
import { ArrowRight, TrendingUp, LineChart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MarketInsightModal } from "@/components/market-insights-modal";

const marketInsights = [
  {
    title: "AI Market Growth",
    description: "The global AI market shows exponential growth, with a projected value reaching $110B by 2024.",
    stats: "450% Growth",
    details: {
      overview: "The artificial intelligence market is experiencing unprecedented growth, driven by increased adoption across industries, technological advancements, and growing investment in AI research and development.",
      keyTrends: [
        "Large Language Models revolutionizing natural language processing",
        "Edge AI enabling real-time processing on devices",
        "AI automation transforming business operations",
        "Increased focus on explainable AI"
      ],
      challenges: [
        "Data privacy and security concerns",
        "Skill gap in AI expertise",
        "Integration with legacy systems",
        "Ethical considerations"
      ],
      opportunities: [
        "Healthcare diagnostics and treatment",
        "Financial services automation",
        "Smart manufacturing solutions",
        "Personalized customer experiences"
      ],
      forecast: "The AI market is projected to maintain its explosive growth trajectory, with estimates suggesting a compound annual growth rate (CAGR) of 85.9% from 2024 to 2030. This growth will be particularly pronounced in emerging markets, with Africa showing significant potential for AI adoption and innovation."
    }
  },
  {
    title: "Blockchain Evolution",
    description: "Enterprise blockchain adoption is accelerating, with market size expected to reach $60B by 2024.",
    stats: "30% Adoption",
    details: {
      overview: "Blockchain technology is moving beyond cryptocurrencies into enterprise applications, with increasing adoption across industries for transparency, security, and process optimization.",
      keyTrends: [
        "Enterprise blockchain solutions",
        "DeFi platform growth",
        "NFT technology applications",
        "Green blockchain initiatives"
      ],
      challenges: [
        "Scalability issues",
        "Regulatory uncertainty",
        "Energy consumption",
        "Integration complexity"
      ],
      opportunities: [
        "Supply chain transparency",
        "Digital identity solutions",
        "Smart contract automation",
        "Cross-border transactions"
      ],
      forecast: "The blockchain market is expected to see steady growth with a CAGR of 45.2% through 2030. Enterprise adoption is accelerating, particularly in finance, supply chain, and healthcare sectors."
    }
  },
  {
    title: "Machine Learning Impact",
    description: "ML technologies continue steady growth with $65B market potential and 42% adoption rate by 2024.",
    stats: "$65B Market",
    details: {
      overview: "Machine learning is becoming increasingly central to business operations, with applications ranging from predictive analytics to automated decision-making systems.",
      keyTrends: [
        "AutoML platforms",
        "Deep learning applications",
        "MLOps adoption",
        "Transfer learning"
      ],
      challenges: [
        "Data quality and availability",
        "Model interpretability",
        "Computational resources",
        "Deployment complexity"
      ],
      opportunities: [
        "Predictive maintenance",
        "Customer behavior analysis",
        "Risk assessment",
        "Process optimization"
      ],
      forecast: "The machine learning market is projected to grow at a CAGR of 38.8% through 2030, driven by increasing adoption in enterprise applications and advances in deep learning technologies."
    }
  }
];

const trendingTopics = [
  {
    title: "AI in Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    growth: "+245%",
    description: "AI revolutionizing medical diagnostics and patient care"
  },
  {
    title: "Blockchain Finance",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    growth: "+180%",
    description: "DeFi and digital assets transforming financial services"
  },
  {
    title: "Edge Computing",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    growth: "+156%",
    description: "Decentralized computing driving next-gen applications"
  }
];

export default function MarketsPage() {
  const [selectedInsight, setSelectedInsight] = useState<(typeof marketInsights)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (insight: typeof marketInsights[0]) => {
    setSelectedInsight(insight);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Add Back to Home button */}
      <div className="container mx-auto px-4 pt-24">
        <Link 
          href="/"
          className="inline-flex items-center text-[#00E6E6] hover:text-[#00E6E6]/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,230,230,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              Technology Market Intelligence
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive analysis of emerging technology markets, trends, and adoption rates across Africa and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Graph Section */}
      <MarketGraphSection />

      {/* Market Insights Grid */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-[#00E6E6]" />
              <h2 className="text-3xl font-bold">Market Insights</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {marketInsights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00E6E6] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{insight.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#00E6E6] font-bold">{insight.stats}</span>
                      <Button 
                        variant="ghost" 
                        className="text-[#00E6E6] hover:text-white hover:bg-[#00E6E6]/10"
                        onClick={() => handleLearnMore(insight)}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <LineChart className="w-8 h-8 text-[#00E6E6]" />
              <h2 className="text-3xl font-bold">Trending Topics</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {trendingTopics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="aspect-video relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-[#00E6E6] text-black px-3 py-1 rounded-full text-sm font-bold">
                      {topic.growth}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00E6E6] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-gray-400">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Insight Modal */}
      <MarketInsightModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        insight={selectedInsight}
      />
    </div>
  );
}
