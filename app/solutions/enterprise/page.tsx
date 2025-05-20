"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Building2, ChevronRight, ArrowRight, Shield, Cpu, Users, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const enterpriseFeatures = [
  {
    title: "Custom Enterprise Solutions",
    description: "Tailored software solutions designed specifically for your business needs",
    icon: Building2,
    benefits: [
      "Streamlined workflows",
      "Improved efficiency",
      "Reduced operational costs",
      "Enhanced productivity"
    ]
  },
  {
    title: "AI Integration",
    description: "Seamless integration of artificial intelligence into your business processes",
    icon: Cpu,
    benefits: [
      "Automated decision making",
      "Predictive analytics",
      "Data-driven insights",
      "Process optimization"
    ]
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security measures and regulatory compliance",
    icon: Shield,
    benefits: [
      "Data protection",
      "Regulatory compliance",
      "Access control",
      "Audit trails"
    ]
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business",
    icon: LineChart,
    benefits: [
      "High availability",
      "Load balancing",
      "Performance optimization",
      "Easy maintenance"
    ]
  }
];

const businessBenefits = [
  {
    title: "Operational Excellence",
    points: [
      "Streamlined business processes",
      "Reduced manual intervention",
      "Improved resource allocation",
      "Enhanced productivity"
    ]
  },
  {
    title: "Cost Optimization",
    points: [
      "Reduced operational costs",
      "Optimized resource utilization",
      "Lower maintenance costs",
      "Better ROI"
    ]
  },
  {
    title: "Innovation & Growth",
    points: [
      "Faster time to market",
      "Competitive advantage",
      "New business opportunities",
      "Market expansion"
    ]
  }
];

const contactInfo = {
  email: "usf@nexthomelabs.com",
  address: "Plot 123, Innovation Hub, Kampala, Uganda"
};

export default function EnterprisePage() {
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
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#00E6E6]">
              <Building2 className="w-8 h-8" />
              <div className="flex items-center text-sm">
                Solutions
                <ChevronRight className="w-4 h-4 mx-1" />
                Enterprise
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-400">
              Transform your business with our comprehensive enterprise solutions
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <feature.icon className="w-6 h-6 text-[#00E6E6]" />
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Business Benefits */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-[#00E6E6]">How It Helps Your Business</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {businessBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-2">
                    {benefit.points.map((point, i) => (
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

          {/* Contact Section */}
          <section className="space-y-6">
            <div className="p-6 rounded-xl border border-[#00E6E6]/20 bg-black/40 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Get Started</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your business? Contact our enterprise team to discuss your needs and how we can help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                  Email: <a href={`mailto:${contactInfo.email}`} className="text-[#00E6E6] hover:underline">{contactInfo.email}</a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E6E6]" />
                  Address: {contactInfo.address}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <a href={`mailto:${contactInfo.email}`}>
                  <Button 
                    className="bg-[#00E6E6] hover:bg-[#00E6E6]/90 text-black group"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
