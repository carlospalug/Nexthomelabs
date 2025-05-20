"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Bot, ChevronRight, ArrowRight, Brain, Building2, Leaf, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const impactSectors = [
  {
    title: "Healthcare Revolution",
    icon: Stethoscope,
    description: "CentGPT's advanced data processing capabilities bring unparalleled efficiency to healthcare delivery. It aids in analyzing patient histories, optimizing treatment plans, and reducing diagnostic errors. Moreover, its fluency in local dialects ensures accessibility and accuracy in patient-practitioner communication, even in remote regions.",
    metrics: [
      "45% reduction in diagnostic time",
      "90% accuracy in patient data analysis",
      "24/7 healthcare support availability"
    ]
  },
  {
    title: "Education Transformation",
    icon: Brain,
    description: "Education is the bedrock of national progress, and CentGPT equips educators with AI-powered tools to craft adaptive and inclusive learning environments. The platform facilitates personalized learning experiences and helps identify areas where students need additional support.",
    metrics: [
      "35% improvement in student engagement",
      "60% increase in learning efficiency",
      "Personalized learning paths for each student"
    ]
  },
  {
    title: "Agricultural Innovation",
    icon: Leaf,
    description: "CentGPT's predictive analytics offer real-time data on weather conditions, pest outbreaks, and optimal planting schedules, enabling farmers to make informed decisions. This technology is particularly crucial for Uganda's agricultural sector.",
    metrics: [
      "50% increase in crop yield predictions",
      "Real-time pest outbreak alerts",
      "Optimized resource allocation"
    ]
  },
  {
    title: "Business Enhancement",
    icon: Building2,
    description: "CentGPT transforms the business landscape by providing actionable market insights, automating customer service, and streamlining financial operations. Its integration capabilities make it an invaluable tool for businesses of all sizes.",
    metrics: [
      "40% reduction in operational costs",
      "24/7 automated customer support",
      "Enhanced decision-making processes"
    ]
  }
];

const features = [
  {
    title: "Local Context Integration",
    description: "CentGPT incorporates Ugandan cultural nuances, languages, and business practices",
    points: [
      "Support for local languages",
      "Cultural context awareness",
      "Regional business understanding"
    ]
  },
  {
    title: "Advanced AI Capabilities",
    description: "State-of-the-art machine learning and natural language processing",
    points: [
      "Deep learning algorithms",
      "Natural language understanding",
      "Predictive analytics"
    ]
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow and adapt to increasing demands and new use cases",
    points: [
      "Cloud-native infrastructure",
      "Modular design",
      "Easy integration capabilities"
    ]
  }
];

export default function CentGPTArticlePage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/news"
          className="inline-flex items-center text-[#00E6E6] hover:text-[#00E6E6]/80 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#00E6E6]">
              <Bot className="w-8 h-8" />
              <div className="flex items-center text-sm">
                News
                <ChevronRight className="w-4 h-4 mx-1" />
                Innovation
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              CentGPT: Uganda's Breakthrough in Local AI Technology
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>By NextHomeLabs Team</span>
              </div>
              <span>•</span>
              <span>December 1, 2024</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              NextHomeLabs proudly unveils CentGPT, an innovative leap in Uganda's technological evolution. This bespoke AI model signifies more than just a technological milestone; it is a testament to Uganda's burgeoning capabilities in the global AI ecosystem.
            </p>
          </div>

          {/* Main Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
              alt="CentGPT - Advanced AI Technology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Key Features */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-[#00E6E6]">A Groundbreaking Model Tailored for Uganda</h2>
            <p className="text-gray-300 leading-relaxed">
              CentGPT is not a one-size-fits-all solution but rather a meticulously designed model built upon a deep understanding of Uganda's unique challenges and opportunities. It integrates linguistic nuances, cultural contexts, and sector-specific dynamics, ensuring that its applications resonate profoundly with Ugandan society.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Impact Sectors */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Transformative Impact Across Key Sectors</h2>
            
            <div className="space-y-8">
              {impactSectors.map((sector, index) => (
                <motion.div
                  key={sector.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <sector.icon className="w-6 h-6 text-[#00E6E6]" />
                    <h3 className="text-xl font-semibold text-white">
                      {sector.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {sector.description}
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {sector.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/10 text-sm text-gray-300"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Vision & Future */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">Envisioning a Future Driven by AI Innovation</h2>
            <p className="text-gray-300 leading-relaxed">
              Whether in streamlining government services, optimizing the logistics industry, or revolutionizing the tourism sector, CentGPT exemplifies the seamless integration of cutting-edge AI with local expertise. It serves as both a catalyst for national progress and a symbol of technological sovereignty.
            </p>
          </section>

          {/* CTA Section */}
          <section className="space-y-6">
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Experience the Future of AI</h3>
              <p className="text-gray-300 mb-6">
                Join us in revolutionizing Uganda's technological landscape with CentGPT. Discover how our AI solutions can transform your organization and drive innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://centgpt.com" target="_blank">
                  <Button 
                    className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                  >
                    Try CentGPT
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline"
                    className="border-[#00E6E6] text-[#00E6E6] hover:bg-[#00E6E6]/10"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
