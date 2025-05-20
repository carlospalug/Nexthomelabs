"use client";

import { motion } from "framer-motion";
import { Leaf, TreePine, Droplets, Wind, Sun, Recycle, Users, Building2, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const environmentalMetrics = [
  {
    title: "Carbon Footprint Reduction",
    icon: Leaf,
    current: "45%",
    target: "60%",
    timeline: "2025",
    metrics: {
      "CO2 Reduction": "1,200 tons",
      "Energy Saved": "2.5M kWh",
      "Impact Score": "8.5/10"
    }
  },
  {
    title: "Green Energy Usage",
    icon: Sun,
    current: "70%",
    target: "100%",
    timeline: "2026",
    metrics: {
      "Solar Power": "60%",
      "Wind Power": "30%",
      "Other Renewables": "10%"
    }
  },
  {
    title: "Water Conservation",
    icon: Droplets,
    current: "35%",
    target: "50%",
    timeline: "2025",
    metrics: {
      "Water Saved": "500,000 L",
      "Recycling Rate": "40%",
      "Efficiency": "85%"
    }
  }
];

const initiatives = [
  {
    title: "Green AI Infrastructure",
    description: "Implementing energy-efficient AI computing solutions",
    icon: TreePine,
    achievements: [
      "Carbon-neutral data centers",
      "Optimized cooling systems",
      "Energy-efficient hardware"
    ]
  },
  {
    title: "Sustainable Operations",
    description: "Minimizing environmental impact in daily operations",
    icon: Recycle,
    achievements: [
      "Zero-waste policies",
      "Paperless workflows",
      "Green office practices"
    ]
  },
  {
    title: "Community Impact",
    description: "Supporting local environmental initiatives",
    icon: Users,
    achievements: [
      "Tree planting programs",
      "Environmental education",
      "Community clean-up"
    ]
  }
];

const impactReports = [
  {
    year: 2024,
    quarter: "Q1",
    highlights: [
      {
        title: "Carbon Reduction",
        value: "300",
        unit: "tons",
        change: "+25%"
      },
      {
        title: "Energy Savings",
        value: "500K",
        unit: "kWh",
        change: "+30%"
      },
      {
        title: "Water Saved",
        value: "100K",
        unit: "liters",
        change: "+15%"
      }
    ],
    certifications: [
      "ISO 14001:2015",
      "Green Business Certification",
      "Energy Star Partner"
    ]
  }
];

export function SustainabilitySection() {
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-8 h-8 text-[#00E6E6]" />
            <h2 className="text-4xl md:text-5xl font-bold">Sustainability Impact</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to environmental responsibility and sustainable technology practices
          </p>
        </motion.div>

        {/* Environmental Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {environmentalMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                <metric.icon className="w-8 h-8 text-[#00E6E6] mb-4" />
                <h3 className="text-xl font-semibold mb-4">{metric.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Current</span>
                      <span className="text-[#00E6E6]">{metric.current}</span>
                    </div>
                    <div className="h-2 bg-[#00E6E6]/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: metric.current }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-[#00E6E6]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Target ({metric.timeline})</span>
                      <span className="text-[#00E6E6]">{metric.target}</span>
                    </div>
                    <div className="h-2 bg-[#00E6E6]/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#00E6E6]/40"
                        style={{ width: metric.target }}
                      />
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    {Object.entries(metric.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-400">{key}</span>
                        <span className="text-[#00E6E6]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Initiatives */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Sustainability Initiatives</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                  <initiative.icon className="w-8 h-8 text-[#00E6E6] mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{initiative.title}</h4>
                  <p className="text-gray-400 mb-4">{initiative.description}</p>
                  <div className="space-y-2">
                    {initiative.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact Reports */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Latest Impact Report</h3>
          {impactReports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E6E6]/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <ChartBar className="w-6 h-6 text-[#00E6E6]" />
                  <h4 className="text-xl font-semibold">
                    {report.year} {report.quarter} Report
                  </h4>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {report.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-[#00E6E6]/5 border border-[#00E6E6]/20"
                    >
                      <div className="text-2xl font-bold text-[#00E6E6] mb-1">
                        {highlight.value}
                        <span className="text-base font-normal ml-1">
                          {highlight.unit}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400 mb-2">
                        {highlight.title}
                      </div>
                      <div className="text-sm text-green-400">
                        {highlight.change}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-4">Certifications & Recognition</h5>
                  <div className="flex flex-wrap gap-3">
                    {report.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-[#00E6E6]/10 text-[#00E6E6] text-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/sustainability">
            <Button 
              className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black"
            >
              View Full Impact Report
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}