"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Cloud, Cpu, Brain, Lock, Network, Zap } from "lucide-react";

const techStacks = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    technologies: [
      {
        name: "TensorFlow",
        description: "Deep learning and neural networks",
        metrics: {
          performance: "98%",
          accuracy: "96%",
          latency: "150ms"
        },
        features: [
          "Custom Model Training",
          "Neural Network Architecture",
          "Distributed Training"
        ]
      },
      {
        name: "PyTorch",
        description: "Dynamic neural networks",
        metrics: {
          performance: "97%",
          accuracy: "95%",
          latency: "180ms"
        },
        features: [
          "Dynamic Computational Graphs",
          "GPU Acceleration",
          "Research Flexibility"
        ]
      }
    ]
  },
  {
    category: "Blockchain",
    icon: Database,
    technologies: [
      {
        name: "Ethereum",
        description: "Smart contract platform",
        metrics: {
          tps: "30",
          finality: "15s",
          security: "99.99%"
        },
        features: [
          "Smart Contracts",
          "DeFi Integration",
          "Token Standards"
        ]
      },
      {
        name: "Hyperledger",
        description: "Enterprise blockchain framework",
        metrics: {
          tps: "3000",
          finality: "2s",
          security: "99.999%"
        },
        features: [
          "Private Networks",
          "Modular Architecture",
          "Enterprise Security"
        ]
      }
    ]
  },
  {
    category: "Cloud Infrastructure",
    icon: Cloud,
    technologies: [
      {
        name: "AWS",
        description: "Cloud computing services",
        metrics: {
          uptime: "99.99%",
          scalability: "Auto",
          regions: "25+"
        },
        features: [
          "Global Infrastructure",
          "Auto-scaling",
          "Managed Services"
        ]
      },
      {
        name: "Google Cloud",
        description: "Cloud platform services",
        metrics: {
          uptime: "99.95%",
          scalability: "Auto",
          regions: "20+"
        },
        features: [
          "AI/ML Integration",
          "Big Data Analytics",
          "Kubernetes Engine"
        ]
      }
    ]
  },
  {
    category: "Security",
    icon: Lock,
    technologies: [
      {
        name: "Zero Trust Architecture",
        description: "Advanced security framework",
        metrics: {
          protection: "99.9%",
          detection: "98%",
          response: "30s"
        },
        features: [
          "Identity Verification",
          "Micro-segmentation",
          "Continuous Monitoring"
        ]
      }
    ]
  }
];

const performanceData = [
  { name: "Response Time", value: 150, unit: "ms", benchmark: 250 },
  { name: "Throughput", value: 10000, unit: "req/s", benchmark: 8000 },
  { name: "Availability", value: 99.99, unit: "%", benchmark: 99.9 },
  { name: "Error Rate", value: 0.01, unit: "%", benchmark: 0.1 }
];

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState(techStacks[0]);
  const [activeTech, setActiveTech] = useState(techStacks[0].technologies[0]);

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
          <h2 className="text-4xl md:text-5xl font-bold">Our Technology Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge technology stack powering next-generation solutions
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techStacks.map((category) => (
            <motion.button
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => {
                setActiveCategory(category);
                setActiveTech(category.technologies[0]);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeCategory.category === category.category
                  ? 'bg-[#00E6E6] text-black'
                  : 'bg-[#00E6E6]/10 text-white hover:bg-[#00E6E6]/20'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.category}
            </motion.button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {activeCategory.technologies.map((tech) => (
                <div
                  key={tech.name}
                  onClick={() => setActiveTech(tech)}
                  className={`p-6 rounded-xl border cursor-pointer transition-all ${
                    activeTech.name === tech.name
                      ? 'border-[#00E6E6] bg-[#00E6E6]/10'
                      : 'border-[#00E6E6]/20 hover:border-[#00E6E6]/60'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-400">{tech.description}</p>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40">
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(activeTech.metrics).map(([key, value]) => (
                  <div key={key} className="p-4 rounded-lg bg-[#00E6E6]/5">
                    <div className="text-2xl font-bold text-[#00E6E6]">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="space-y-3">
                {activeTech.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00E6E6]" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Performance Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40">
              <h3 className="text-xl font-semibold mb-6">System Performance</h3>
              {performanceData.map((metric) => (
                <div key={metric.name} className="mb-6 last:mb-0">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{metric.name}</span>
                    <span className="text-[#00E6E6]">
                      {metric.value}{metric.unit}
                    </span>
                  </div>
                  <div className="h-2 bg-[#00E6E6]/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(metric.value / metric.benchmark) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-[#00E6E6]"
                    />
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-xs text-gray-400">
                      Benchmark: {metric.benchmark}{metric.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Demo Button */}
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 text-center">
              <h3 className="text-xl font-semibold mb-4">Experience It Live</h3>
              <p className="text-gray-400 mb-6">
                Try out our {activeTech.name} implementation in a live environment
              </p>
              <Button 
                className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
              >
                Launch Interactive Demo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}