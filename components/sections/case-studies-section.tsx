"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, BarChart2, TrendingUp, Users } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Financial Analytics",
    client: "Major East African Bank",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    challenge: "Needed real-time fraud detection and risk assessment capabilities",
    solution: "Implemented advanced AI models for transaction monitoring and risk analysis",
    results: {
      metrics: [
        { label: "Fraud Detection Rate", value: "99.8%", increase: "45%" },
        { label: "Processing Time", value: "0.3s", improvement: "85%" },
        { label: "Cost Savings", value: "$2.5M", timeframe: "annually" }
      ],
      keyAchievements: [
        "Reduced false positives by 76%",
        "Improved customer satisfaction by 48%",
        "Automated 89% of risk assessments"
      ]
    },
    testimonial: {
      quote: "The AI solution has transformed our risk management capabilities.",
      author: "Chief Risk Officer"
    }
  },
  {
    id: 2,
    title: "Blockchain Supply Chain Tracking",
    client: "Pan-African Logistics Company",
    image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=1200&q=80",
    challenge: "Lack of transparency and traceability in supply chain operations",
    solution: "Developed blockchain-based tracking system with IoT integration",
    results: {
      metrics: [
        { label: "Shipment Visibility", value: "100%", increase: "60%" },
        { label: "Delivery Accuracy", value: "99.9%", improvement: "40%" },
        { label: "Operating Costs", value: "$3.8M", reduction: "35%" }
      ],
      keyAchievements: [
        "Real-time tracking of 15,000+ shipments",
        "Reduced disputes by 92%",
        "Improved delivery time by 43%"
      ]
    },
    testimonial: {
      quote: "This technology has revolutionized our entire logistics operation.",
      author: "Operations Director"
    }
  },
  {
    id: 3,
    title: "Smart Agriculture AI Implementation",
    client: "Regional Agricultural Cooperative",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    challenge: "Inefficient crop management and yield prediction",
    solution: "Deployed AI-driven crop monitoring and prediction system",
    results: {
      metrics: [
        { label: "Crop Yield", value: "+35%", increase: "Year-over-Year" },
        { label: "Water Usage", value: "-40%", improvement: "Efficiency" },
        { label: "Revenue", value: "$4.2M", increase: "Additional" }
      ],
      keyAchievements: [
        "Predicted crop diseases with 94% accuracy",
        "Optimized irrigation for 50,000 hectares",
        "Reduced crop losses by 65%"
      ]
    },
    testimonial: {
      quote: "The AI system has dramatically improved our agricultural productivity.",
      author: "Agricultural Director"
    }
  }
];

export function CaseStudiesSection() {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCaseStudyChange = (study: typeof caseStudies[0]) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveStudy(study);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,230,230,0.05),transparent_70%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(0, 230, 230, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our AI and blockchain solutions are transforming businesses across Africa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Case Study Navigation */}
          <div className="space-y-6">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative group cursor-pointer ${
                  activeStudy.id === study.id ? 'scale-105' : ''
                }`}
                onClick={() => handleCaseStudyChange(study)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className={`relative p-6 rounded-xl border ${
                  activeStudy.id === study.id ? 'border-[#00E6E6] bg-black/60' : 'border-[#00E6E6]/20 bg-black/40'
                } backdrop-blur-sm transition-all duration-300 hover:border-[#00E6E6]/60`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                      <p className="text-gray-400">{study.client}</p>
                    </div>
                    <ChevronRight className={`w-6 h-6 ml-auto text-[#00E6E6] transition-transform ${
                      activeStudy.id === study.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Case Study Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isAnimating ? 0 : 1, y: isAnimating ? 20 : 0 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src={activeStudy.image}
                  alt={activeStudy.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">{activeStudy.title}</h3>
                  <p className="text-[#00E6E6]">{activeStudy.client}</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold mb-3">Challenge</h4>
                    <p className="text-gray-300">{activeStudy.challenge}</p>
                  </div>
                  <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold mb-3">Solution</h4>
                    <p className="text-gray-300">{activeStudy.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-6">Key Results</h4>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {activeStudy.results.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-[#00E6E6] mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {metric.label}
                          {metric.increase && (
                            <span className="text-green-400 block">↑ {metric.increase}</span>
                          )}
                          {metric.improvement && (
                            <span className="text-green-400 block">↑ {metric.improvement}</span>
                          )}
                          {metric.reduction && (
                            <span className="text-green-400 block">↓ {metric.reduction}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {activeStudy.results.keyAchievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#00E6E6]/10 flex items-center justify-center">
                          {index === 0 ? (
                            <BarChart2 className="w-4 h-4 text-[#00E6E6]" />
                          ) : index === 1 ? (
                            <TrendingUp className="w-4 h-4 text-[#00E6E6]" />
                          ) : (
                            <Users className="w-4 h-4 text-[#00E6E6]" />
                          )}
                        </div>
                        <p className="text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                  <blockquote className="text-xl text-gray-300 italic mb-4">
                    "{activeStudy.testimonial.quote}"
                  </blockquote>
                  <p className="text-[#00E6E6]">- {activeStudy.testimonial.author}</p>
                </div>

                <Button 
                  className="w-full bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}